<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# No personal information in the repo

Never commit personal information — email addresses, phone numbers, wallet addresses, or similar PII — anywhere: not in tracked files, commit messages, or PR titles/descriptions.

- When creating or updating `.env.example`, omit any variable whose value is personal information (e.g. `ADMIN_EMAIL`, `SUPPORT_PHONE`, `WALLET_ADDRESS`) entirely — do not include it with a placeholder, and never copy real values from `.env`.
- If personal information is needed for the app to run, it belongs only in local/untracked env files (`.env`, `.env.local`) or the deployment platform's environment variables.
- Before committing, scan the diff for anything matching an email, phone number, or wallet address and remove it first.
