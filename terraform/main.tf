terraform {
  required_providers {
    aws = ">= 3.40.0"
  }
}

provider "aws" {
  region = var.region
}

provider "aws" {
  alias  = "global"
  region = var.global_region
}

locals {
  application = var.app.name
  env         = var.app.environment
  stage       = "${local.application}-${local.env}"

  tags = {
    Name : "${local.stage}",
    Env : "${local.env}"
  }

  s3_logs_bucket = module.s3_access_logs_bucket.s3_bucket_id
}

data "aws_caller_identity" "this" {}
data "aws_partition" "this" {}

module "application" {
  source  = "terraformita/ecs-app/aws"
  version = "0.0.8"

  stage_name = local.stage
  tags       = local.tags

  access_logs_bucket_id = module.s3_access_logs_bucket.s3_bucket_id

  vpc = var.vpc

  autoscaling_instances = var.autoscaling_instances

  autoscaling_thresholds = {
    cpu    = 100
    memory = 100
  }

  auth = {
    allow_user_sign_up = false
  }

  host_based_auth = {
    "www" = {
      automated          = false
      allow_user_sign_up = true
    }
  }

  database = {
    db_name              = "web_app"
    port                 = 5432
    user                 = "web_user"
    engine               = "postgres"
    engine_version       = "16.1"
    major_engine_version = "16"
    storage_gb           = 60
    multi_az             = false
    log_exports          = ["postgresql"]
  }

  containers = {

    backend = {
      hostname = "blueprint"
      web_path = "/api"
      protocol = "HTTP"
      port     = 3003
      cpu      = 512
      memory   = 1024
      health_check = {
        interval       = 30
        timeout        = 10
        path           = "/static/index.html"
        response_codes = "200"
      }

      env_vars = {
        ENV                         = "development"
        HASURA_GRAPHQL_API_ENDPOINT = "http://graphql:3001/v1/graphql"
        HASURA_ACTIONS_PORT         = "3003"
        BASE_URL                    = "https://blueprint.devsecopsinc.io"
      }

      secret_vars = {
        # COGNITO
        COGNITO_REGION       = "{cognito_region}"
        COGNITO_USER_POOL_ID = "{cognito_user_pool_id}"
        COGNITO_CLIENT_ID    = "{cognito_client_id}"

        # WEBHOOK
        WEBHOOK_JWT_SECRET = ""

        # HASURA
        HASURA_GRAPHQL_ADMIN_SECRET = ""
        HASURA_GRAPHQL_JWT_SECRET   = ""
      }

      accessible_cloud_storage = []
    }

    graphql = {
      hostname = "blueprint"
      web_path = "/console"
      protocol = "HTTP"
      port     = 3001
      cpu      = 1024
      memory   = 2048

      health_check = {
        interval       = 30
        timeout        = 20
        path           = "/console"
        response_codes = "200"
      }

      env_vars = {
        HASURA_GRAPHQL_SERVER_PORT              = "3001"
        HASURA_GRAPHQL_MIGRATIONS_SERVER_PORT   = "3001"
        HASURA_GRAPHQL_ENABLED_LOG_TYPES        = "startup, http-log, webhook-log, websocket-log, query-log"
        HASURA_GRAPHQL_ENABLE_CONSOLE           = "true" # set to "false" to disable console
        HASURA_GRAPHQL_ENABLE_TELEMETRY         = "false"
        HASURA_GRAPHQL_DEV_MODE                 = "true"
        HASURA_GRAPHQL_UNAUTHORIZED_ROLE        = "anonymous"
        HASURA_GRAPHQL_V1_BOOLEAN_NULL_COLLAPSE = "true"
      }
      secret_vars = {
        HASURA_GRAPHQL_DATABASE_URL = "{db_url}"
        # COGNITO
        COGNITO_REGION        = "{cognito_region}"
        COGNITO_USER_POOL_ID  = "{cognito_user_pool_id}"
        COGNITO_CLIENT_ID     = "{cognito_client_id}"
        COGNITO_CLIENT_SECRET = "{cognito_client_secret}"
        # HASURA
        HASURA_GRAPHQL_ADMIN_SECRET = ""
        HASURA_GRAPHQL_JWT_SECRET   = ""
      }
    }

    frontend = {
      hostname       = "blueprint"
      web_path       = "/"
      web_entrypoint = true
      protocol       = "HTTPS"
      port           = 443
      cpu            = 512
      memory         = 512

      health_check = {
        interval       = 30
        timeout        = 20
        path           = "/"
        response_codes = "200"
      }

      accessible_cloud_storage = []

      env_vars = {
        "VITE_BASE_URL"                    = "https://blueprint.devsecopsinc.io"
        "VITE_HASURA_GRAPHQL_API_ENDPOINT" = "/v1/graphql"
      }
      secret_vars = {
        VITE_HASURA_GRAPHQL_ADMIN_SECRET = ""
      }
    }
  }

  region      = var.region
  domain_name = var.domain_name

  deployment_strategy = {
    cost_effective  = false
    enable_rollback = false
  }

  ssl_certificate = {
    key_algorithm = "RSA"
    key_length    = 2048
    organization  = "DevSecOps, Inc."
    self_signed   = false
  }
}
