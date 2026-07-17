<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# No personal information in the repo

Never commit personal information — email addresses, phone numbers, wallet addresses, or similar PII — anywhere: not in tracked files, commit messages, or PR titles/descriptions.

- When creating or updating `.env.example`, omit any variable whose value is personal information (e.g. `ADMIN_EMAIL`, `SUPPORT_PHONE`, `WALLET_ADDRESS`) entirely — do not include it with a placeholder, and never copy real values from `.env`.
- If personal information is needed for the app to run, it belongs only in local/untracked env files (`.env`, `.env.local`) or the deployment platform's environment variables.
- Before committing, scan the diff for anything matching an email, phone number, or wallet address and remove it first.

# Keep Terms of Service & Privacy Policy in sync

When a new feature changes what the app collects, stores, shares, or lets users do — e.g. new
personal data collected, third-party services or analytics added, payments, user-generated content,
cookies/tracking — update the Terms of Service and Privacy Policy to reflect it in the same PR. If
those pages don't exist in the repo yet or live elsewhere, flag the needed update in the PR's
Deployment Notes instead of silently shipping the feature.

# Commit & PR guidelines

- **One feature per PR — no coupling.** Each feature reviews, merges, and reverts independently. A
  change spanning two features is two PRs.
- **Each PR is complete, not half-plumbing** — its migration *and* the code/API/UI that uses it *and* a
  working path. No dead schema.
- **Migrations created incrementally — only what the current PR needs.** Never scaffold a phase's
  migrations up front. Number sequentially (`0002_…`) in PR-merge order.
- **Migrations are append-only** — never edit a merged migration; write a new one.
- **Chain PRs as necessary** - if someone can't review right away, chain off each other instead of waiting otherwise try to make each PR off latest origin main
- **Fill the PR template's Deployment Notes** — migration/env needed? migration run? (`supabase db
  push` as part of merging).
- **Keep PRs reviewable** — small enough to read in one sitting.
- **Plain commit messages — no AI-attribution trailers.** Subject + body only. Never append
  `Co-Authored-By: Claude …` (or any AI/assistant attribution) to a commit.
- **Graduate to review, don't merge** — open each PR for review (`gh pr ready`) and stack dependents on
  its branch
