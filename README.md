# AI-Driven Engineering

This repository is a documentation and agent guidance workspace for Copilot-based engineering workflows.
It collects repository-level instructions, skill definitions, and architecture guidance rather than production application code.

## Repository structure

- `instruction/`
  - Copilot and agent instructions for repository behavior, architecture, and Python standards
  - Includes:
    - `AWS-architecture.instructions.md`
    - `copilot-instructions.md`
    - `python_coding_standard.instructions.md`
- `.github/skills/`
  - Reusable Copilot skill definitions for specialized tasks
  - Includes:
    - `github-actions-debugging`
    - `webapp-testing`
    - `readme-management`
- `.gitignore`
  - Repository ignore rules
- `README.md`
  - This file

## What this repo is for

- Documenting how Copilot should behave in this repository
- Providing agent skills for common tasks like README updates, workflow debugging, and webapp testing
- Storing architecture guidance and local development best practices for AWS/LocalStack demos

## How to use this repo

1. Open `instruction/copilot-instructions.md` to understand repository-specific agent behavior and preferences.
2. Open `instruction/AWS-architecture.instructions.md` for scalable AWS and LocalStack architecture guidance.
3. Open `instruction/python_coding_standard.instructions.md` for Python formatting, typing, testing, and CI expectations.
4. Inspect `.github/skills/` to see how skills are defined and which tasks are covered.

## Notes

- This repository does not currently include runnable application code in the root directory.
- If application examples are added later, update this README with setup, usage, and testing instructions.
