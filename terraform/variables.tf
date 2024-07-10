variable "region" {
  type        = string
  default     = "us-east-1"
  description = "Target AWS Region for the infrastructure"
}

variable "global_region" {
  type        = string
  default     = "us-east-1"
  description = "Global AWS Region"
}

variable "github" {
  type = object({
    url            = string
    client_id_list = list(string)
    organization   = string
    repositories   = list(string)
  })

  default = {
    organization   = "devsecopsinc"
    url            = "https://token.actions.githubusercontent.com"
    client_id_list = ["sts.amazonaws.com"]
    repositories   = ["blueprint-web-app"]
  }
}

variable "autoscaling_instances" {
  type = object({
    min     = optional(number, 1)
    max     = optional(number, 3)
    desired = optional(number, 2)

    # Instance type should support vpc ENI trunking
    # https://docs.aws.amazon.com/AmazonECS/latest/developerguide/container-instance-eni.html#eni-trunking-supported-instance-types
    instance_type      = string
    use_spot_instances = optional(bool, false)
    spot_price         = optional(number, 0)
  })

  default = {
    min     = 1
    max     = 3
    desired = 2

    instance_type      = "c7a.xlarge"
    use_spot_instances = true
    spot_price         = 0.15
  }
}

variable "autoscaling_thresholds" {
  type = object({
    cpu    = number
    memory = number
  })

  default = {
    cpu    = 100
    memory = 100
  }
}

variable "app" {
  type = object({
    name        = string
    environment = string
  })

  default = {
    name        = "web-app"
    environment = "dev"
  }
}

variable "domain_name" {
  type    = string
  default = "devsecopsinc.io"
}

variable "ses_identity_arn" {
  type     = string
  default  = null
  nullable = true
}

variable "vpc" {
  type = object({
    cidr             = string
    azs              = list(string)
    public_subnets   = list(string)
    private_subnets  = list(string)
    database_subnets = list(string)
  })

  default = {
    cidr = "10.24.0.0/16"
    azs  = ["us-east-1a", "us-east-1b"]
    public_subnets = [
      "10.24.0.0/24",
      "10.24.2.0/24"
    ]
    private_subnets = [
      "10.24.1.0/24",
      "10.24.3.0/24"
    ]
    database_subnets = [
      "10.24.4.0/24",
      "10.24.6.0/24"
    ]
  }
}
