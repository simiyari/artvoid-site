# Security Policy

## Supported versions

Only the current deployment of the `main` branch (artvoid.ir) is supported.

## Reporting a vulnerability

Please **do not open a public issue**. Report privately through GitHub:
**Security → Report a vulnerability** on this repository.

Include steps to reproduce and the affected URL or commit. We aim to acknowledge
within 3 business days and to fix confirmed high-severity issues within 14 days.
Please allow reasonable time for a fix before any disclosure.

## Scope

In scope: this repository and the static site it deploys.
Out of scope: third-party services, social engineering, volumetric denial of service.

## Secrets

This repository must never contain credentials. Commits are scanned for secrets
with Gitleaks before they are made; any secret that reaches Git history is treated
as compromised and rotated.
