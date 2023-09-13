resource "aws_iam_openid_connect_provider" "github" {
  client_id_list = ["sts.amazonaws.com", "https://github.com/pataruco"]

  thumbprint_list = ["6938fd4d98bab03faadb97b34396831e3780aea1"]
  url             = "https://token.actions.githubusercontent.com"
}

resource "aws_iam_role" "github_actions_role" {
  name = "github_actions_role"

  assume_role_policy = data.aws_iam_policy_document.assume_role.json

  inline_policy {
    name = "ecr_write_access"

    policy = jsonencode({
      "Version" : "2012-10-17",
      "Statement" : [
        {
          "Effect" : "Allow",
          "Action" : [
            "s3:PutObject",
            "s3:ListBucket",
            "s3:GetObject"
          ],
          "Resource" : "*"
        },
      ]
    })
  }
}


data "aws_iam_policy_document" "assume_role" {
  statement {
    actions = ["sts:AssumeRoleWithWebIdentity"]
    effect  = "Allow"

    condition {
      test     = "StringLike"
      values   = ["repo:pataruco/ga:*"]
      variable = "token.actions.githubusercontent.com:sub"
    }

    condition {
      test     = "StringEquals"
      values   = ["sts.amazonaws.com"]
      variable = "token.actions.githubusercontent.com:aud"
    }

    principals {
      identifiers = [aws_iam_openid_connect_provider.github.arn]
      type        = "Federated"
    }
  }

  version = "2012-10-17"
}
