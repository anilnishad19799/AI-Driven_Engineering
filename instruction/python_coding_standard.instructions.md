---
description: concise, machine-actionable Python guidance for contributors and AI agents.
applyTo: 'whenever code reviewer agent called then this instrcution should be called for coding standard' # when provided, instructions will automatically be added to the request context when the pattern matches an attached file
---

Scope
- Applies to all Python code in the repository (`Floci_AWS/*`, root scripts, and examples).

Formatting & style
- Target Python 3.11+. Use modern, clear idioms but maintain readability.
- Run `black` for formatting and `isort` for imports. Default Black line length (88) is the baseline.
- Follow PEP8 for naming and layout. Prefer descriptive names over abbreviations.

Typing & linting
- Add type hints to public functions and library boundaries. Use `mypy --ignore-missing-imports` for CI checks.
- Avoid pervasive `Any` — prefer narrow types or `TypedDict` for data shapes.

Imports & packaging
- Use absolute imports. Group: stdlib, third-party, local.
- Keep a `requirements.txt` next to runnable examples or sample apps. Pin versions for reproducible demos.

Testing
- Use `pytest`. Tests should be small, deterministic, and fast.
- For AWS interactions prefer unit tests that mock `boto3` calls; use LocalStack for lightweight integration tests.

Logging & errors
- Use the `logging` module. No `print()` for production flows.
- Catch specific exceptions and provide actionable messages. Do not use bare `except:`.

Security
- Never commit credentials. Use env vars and `test` placeholders for LocalStack examples.

Automation & CI
- Add format/lint checks to CI: `black --check`, `isort --check-only`, `mypy`, `pytest`.

When editing code
- Add small, focused changes with tests and formatting. Link to existing README steps rather than duplicating run instructions.
- If adding helper scripts (deploy/cleanup), include a short usage snippet in the script header or a small README.

Commands (examples)
```bash
black .
isort .
pytest -q
```