locals {
  iam_template_prefix = "${path.module}/templates/iam"
}

resource "aws_iam_policy" "ses" {
  count       = var.ses_identity_arn != null ? 1 : 0
  name        = "${local.stage}-ses-access"
  description = "Allows access to SES for ECS service(s)"
  policy = jsonencode(
    {
      Version = "2012-10-17",
      Statement = [
        {
          Effect = "Allow",
          Action = [
            "ses:SendEmail",
            "ses:SendRawEmail"
          ],
          Resource = [
            var.ses_identity_arn
          ]
        }
      ]
    }
  )
}

resource "aws_iam_role_policy_attachment" "ses" {
  count      = var.ses_identity_arn != null ? 1 : 0
  role       = module.application.ecs.task_roles.backend.name
  policy_arn = aws_iam_policy.ses[0].arn
}
