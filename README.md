# AI-Driven Engineering

This repository contains agent guidance and documentation for AI-driven engineering workflows.
It is focused on Copilot/agent instructions, repository-level documentation, and skill definitions rather than a runnable application.

## Contents

- `instruction/`
  - Repository and code guidance for Copilot and agent behavior
  - Includes `AWS-architecture.instructions.md`, `copilot-instructions.md`, and `python_coding_standard.instructions.md`
- `.github/skills/`
  - Agent skill definitions used by Copilot for specialized tasks
  - Includes `github-actions-debugging`, `webapp-testing`, and `readme-management`
- `.gitignore`
- `README.md`

## Purpose

Use this repo to:
- document AI agent behavior and coding standards
- define reusable Copilot skills for repository maintenance
- provide architecture and local development guidance for AWS/LocalStack demos

## How to use

1. Review `instruction/copilot-instructions.md` for repository-specific agent behavior.
2. Review `instruction/AWS-architecture.instructions.md` for architecture and LocalStack guidance.
3. Review `instruction/python_coding_standard.instructions.md` for Python styling and testing expectations.
4. Explore `.github/skills/` to see available Copilot skills and how they are structured.

## Notes

- There is no application code in the root repository at this time.
- If you add sample apps or demos later, update this README with setup and usage instructions.
