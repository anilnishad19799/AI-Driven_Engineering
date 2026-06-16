---
name: readme-management
description: Guide for editing, creating, and improving README files based on the current project structure and details.
---

# README Management

This skill helps you update or create repository README files so they reflect the current project details, structure, and usage.

## When to use this skill

Use this skill when the user asks to:
- create a new README for the repository
- improve or expand an existing README
- update an existing README to match the current project contents
- add usage, installation, or structure documentation based on project files

## Process

1. Inspect the repository root and any existing README(s) or documentation files.
2. Identify the project boundaries, primary components, and any existing setup commands.
3. Determine what is missing or outdated in the current README.
4. Draft a concise README that includes:
   - purpose and scope
   - key project directories and files
   - installation or setup steps
   - usage examples or commands
   - links to related docs in the repo
5. If the repository already has a README, modify it incrementally and preserve existing useful content.
6. If the repository lacks a README or needs a full rewrite, create a new one with a clear structure.

## Quality criteria

- The README should be accurate with respect to the repository contents.
- It should avoid speculation and only document files or behavior that can be inferred from the repo.
- It should reference existing docs rather than duplicating them when appropriate.
- It should be concise enough to be readable, while still covering the main project purpose and commands.

## Example prompts

- "Update the README to reflect the current repository structure and how to use the project."
- "Create a README for this repo based on the source and documentation files."
- "Improve the README by adding setup and usage instructions from the current project."

## Related customizations

- `project-overview`: a skill focused on generating project summaries and onboarding documentation.
- `docs-linking`: a skill for connecting README sections to existing docs and architecture files.
