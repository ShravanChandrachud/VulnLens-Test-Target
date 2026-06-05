# VulnLens Test Target

Isolated sandbox repo for validating the VulnLens E2E pipeline before wiring it into the main repo.

## What this repo does

Every PR to `main` triggers the VulnLens scan workflow:
1. Detects changed `.js` / `.py` files in the PR
2. Uploads them to S3 (`vulnlens-uploads/<scan-id>/`)
3. Fargate picks them up, runs SAST, posts a GitHub commit status (✅ / ❌)

## Branch structure

| Branch | Purpose |
|---|---|
| `main` | Base branch — holds only this README and the workflow |
| `test/vulnerable` | Intentionally vulnerable code — expect ❌ |
| `test/clean` | Safe code — expect ✅ |
| `test/edge-cases` | Mixed patterns — validates scanner accuracy |

## Required GitHub Secrets

Add these under **Settings → Secrets → Actions**:

| Secret | Description |
|---|---|
| `AWS_ACCESS_KEY_ID` | IAM key with S3 write access |
| `AWS_SECRET_ACCESS_KEY` | IAM secret |
| `AWS_SESSION_TOKEN` | Only needed for temporary STS credentials |

`GITHUB_TOKEN` is auto-provided by GitHub — no setup needed.

## How to test

```bash
git checkout -b test/vulnerable
# add vulnerable.js
git push origin test/vulnerable
# open PR to main → workflow runs → check commit status
```
