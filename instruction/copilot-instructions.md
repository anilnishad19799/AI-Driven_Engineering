# Repository instructions for GitHub Copilot

Short summary: this repo contains small AWS/LocalStack demos (Lambda and an image-flip app). See `AGENTS.md` for the primary agent guidance.

Where to look first:
- [AGENTS.md](../AGENTS.md) — concise agent guidance and quick commands.
- [Floci_AWS/README.md](../Floci_AWS/README.md) — repository overview and prerequisites.

Agent behavior guidance:
- Prefer linking to existing READMEs instead of copying large sections.
- Use `LOCALSTACK_ENDPOINT` / `--endpoint-url` when running `aws` commands in examples.
- Do not modify deployment infra (task-defs, ECS services) without asking the user; propose scripts or CI instead.

If you make changes to infra or add helper scripts, add a brief README or comment describing how to run them locally with LocalStack.
