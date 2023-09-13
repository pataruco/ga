output "github_actions_role_arn" {
  description = "Github Actions Role ARN"
  value       = aws_iam_role.github_actions_role.arn
}
