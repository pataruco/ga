# Infrastructure

## Prerequisites

- Install terraform version `1.5.7` (using [`tfenv`](https://github.com/tfutils/tfenv))
- Install [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html#install-macos0-instructions)

## Initial Environment Setup Steps

### AWS Profile Setup

Use the command `aws configure` and respond the prompts

### AWS S3 Bucket Setup

Manually create the bucket used to hold Terraform state.

```sh
aws s3 mb s3://<NAME_OF_THE_BUCKET> --region eu-east-1
```

In `infrastructure/environments/production/main.tf`, ensure that the hardcoded s3 bucket name matches the name of the bucket you created in the previous step.

```hashicorp
terraform {
    backend "s3" {
      key    = "terraform.state"
      bucket = "pataruco"
      region = "eu-east-1"
    }
}
```

### Terraform Steps

Run `terraform init` followed by `terraform apply`
If you are happy that Terraform will create the correct resources, enter `yes`
