provider "aws" {
  region = "us-east-1"
}

# ----------------------------------------------------------------------------------------------------------------------
# Backend Storage
terraform {
  backend "s3" {
    key    = "ga/terraform.state"
    bucket = "pataruco"
    region = "us-east-1"
  }
}

module "open-connect" {
  source = "../../modules/open-connect"
}
