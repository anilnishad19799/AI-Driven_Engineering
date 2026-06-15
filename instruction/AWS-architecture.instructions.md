---
description: high-level, actionable architecture guidance for building AWS-compatible services locally with Floci/LocalStack and for proposing production-ready infra.
# applyTo: 'Describe when these instructions should be loaded by the agent based on task context' # when provided, instructions will automatically be added to the request context when the pattern matches an attached file
---

Scope
- Applies to architecture and infra decisions for services in this repo. Use for design reviews, agent proposals, and automation scripts.

Design principles
- Scalability: prefer stateless services, horizontal scaling, and backing stores (S3, DynamoDB, RDS) for persistence. Use queues (SQS) and stream processors (Kinesis) for async workloads.
- Security: least-privilege IAM, network segmentation (VPC/security groups), encrypted storage (SSE for S3), and secrets management (Parameter Store / Secrets Manager) in production.
- Observability: structured logs, distributed tracing (X-Ray/OpenTelemetry), and metrics (CloudWatch or Prometheus) by default.

Local development (Floci/LocalStack)
- Use `LOCALSTACK_ENDPOINT` or `AWS_ENDPOINT_URL` env var for `aws` CLI and `boto3` clients. Examples and commands live in `Floci_AWS/README.md` and subfolders.
- Do not commit real credentials; use `test` placeholders for LocalStack-only examples.
- Keep sample JSON templates (task-defs, CFN snippets) in `Floci_AWS/ECR_ECS/` and substitute host/port/ECR URIs at deploy time.

IaC policy
- Store minimal example templates (CloudFormation/JSON) in the repo for demos. For production infra, ask whether to use Terraform, CDK, or CloudFormation before adding full IaC.
- Use parameterized templates and avoid hard-coded account-specific ARNs in committed files.

Deployment guidance
- Prefer automation: provide scripts (`deploy.sh`) or CI workflows to register task defs, push images to Floci ECR, and create services.
- For ECS/Fargate examples use task-def templates with placeholders. CI or `deploy.sh` should substitute env vars.

Security & secrets
- Use env vars and secrets services for production. For LocalStack demos, document the placeholder usage clearly in READMEs.
- Run a quick scan of changes for accidental secrets before committing.

Testing & validation
- Unit test core logic separately from AWS integrations.
- Use LocalStack for integration tests and CI jobs that run lightweight workflows (create buckets, push images, register task defs, run containers).

When proposing changes
- Link to existing READMEs and templates rather than duplicating long runbooks.
- If adding production infra, include a migration plan and cost/ops notes and ask the user for approval.

Example local commands
```bash
export LOCALSTACK_ENDPOINT=http://localhost:4566
aws s3 mb s3://image --endpoint-url $LOCALSTACK_ENDPOINT
docker build -t image-flip-app Floci_AWS/ECR_ECS/image-flip-app
```