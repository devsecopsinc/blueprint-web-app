terraform {
  backend "remote" {
    hostname     = "app.terraform.io"
    organization = "devsecopsinc"

    workspaces {
      prefix = "blueprint-web-app-"
    }
  }
}
