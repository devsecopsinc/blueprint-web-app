#### IAM
locals {
  ecr_wildcard_arn = "arn:${data.aws_partition.this.partition}:ecr:${var.region}:${data.aws_caller_identity.this.account_id}:repository/${local.application}-${local.env}*/*"

  github_accessible_secrets = [
    for name, arn in module.application.secrets.secret_vars :
    arn if contains([
      "/${local.application}-${local.env}/frontend/VITE_HASURA_GRAPHQL_ADMIN_SECRET"
    ], name)
  ]
}

data "tls_certificate" "github-oidc" {
  url = "${var.github.url}/.well-known/openid-configuration"
}

resource "aws_iam_openid_connect_provider" "github" {
  url             = var.github.url
  client_id_list  = var.github.client_id_list
  thumbprint_list = [data.tls_certificate.github-oidc.certificates[0].sha1_fingerprint]
}

resource "aws_iam_role" "github" {
  name        = "${local.stage}-github"
  description = "Role for GitHub repositories"
  path        = "/ci/"

  assume_role_policy = data.aws_iam_policy_document.github.json
}

resource "aws_iam_role" "github_ecs_deploy" {
  name        = "${local.stage}-github-ecs-deploy"
  description = "Role for GitHub repositories for deployment to ECS"
  path        = "/ci/"

  assume_role_policy = data.aws_iam_policy_document.github.json
}

data "aws_iam_policy_document" "github" {
  statement {
    actions = ["sts:AssumeRoleWithWebIdentity"]
    principals {
      type        = "Federated"
      identifiers = [aws_iam_openid_connect_provider.github.arn]
    }
    condition {
      test     = "StringLike"
      variable = "token.actions.githubusercontent.com:sub"
      values   = [for repo in var.github.repositories : "repo:${var.github.organization}/${repo}:*"]
    }
  }
}

resource "aws_iam_role_policy" "ecr_access" {
  name = "${local.stage}-github-ecr-rw"
  role = aws_iam_role.github.id

  policy = data.aws_iam_policy_document.ecr_access.json
}

data "aws_iam_policy_document" "ecr_access" {
  statement {
    effect = "Allow"
    actions = [
      "ecr:GetAuthorizationToken"
    ]
    resources = ["*"]
  }

  statement {
    effect = "Allow"
    actions = [
      "ecr:BatchGetImage",
      "ecr:BatchCheckLayerAvailability",
      "ecr:CompleteLayerUpload",
      "ecr:GetDownloadUrlForLayer",
      "ecr:InitiateLayerUpload",
      "ecr:PutImage",
      "ecr:UploadLayerPart"
    ]
    resources = [
      local.ecr_wildcard_arn
    ]
  }
}

resource "aws_iam_role_policy" "ecs_access" {
  name = "${local.stage}-github-ecs-rw"
  role = aws_iam_role.github_ecs_deploy.id

  policy = data.aws_iam_policy_document.ecs_access.json
}

data "aws_iam_policy_document" "ecs_access" {
  statement {
    sid    = "ECSUpdateService"
    effect = "Allow"
    actions = [
      "ecs:UpdateService"
    ]
    resources = [
      for service in module.application.ecs.services : service.id
    ]
  }

  statement {
    sid    = "ECSDescribeServices"
    effect = "Allow"
    actions = [
      "ecs:RegisterTaskDefinition",
      "ecs:DescribeTaskDefinition",
      "ecs:ListTaskDefinitions",
      "ecs:DeregisterTaskDefinition"
    ]
    resources = ["*"]
  }

  statement {
    sid    = "ECSPassRole"
    effect = "Allow"

    actions = [
      "iam:PassRole"
    ]

    resources = concat([
      module.application.ecs.exec_role.arn
      ], [
      for task_role in module.application.ecs.task_roles : task_role.arn
    ])

    condition {
      test     = "StringEquals"
      variable = "iam:PassedToService"
      values   = ["ecs-tasks.amazonaws.com"]
    }
  }
}

resource "aws_iam_role_policy" "secret_vars_access" {
  count = length(local.github_accessible_secrets) > 0 ? 1 : 0
  name  = "${local.stage}-github-secret-vars-r"
  role  = aws_iam_role.github.id

  policy = data.aws_iam_policy_document.secret_vars_access[0].json
}

data "aws_iam_policy_document" "secret_vars_access" {
  count = length(local.github_accessible_secrets) > 0 ? 1 : 0
  statement {
    sid    = "SSMParametersAccess"
    effect = "Allow"

    actions = [
      "ssm:GetParameters",
      "ssm:GetParameter",
    ]

    resources = local.github_accessible_secrets
  }
}
