# SFCG Reimagined

## Build with

Continue developing this project in the (https://lovable.dev/projects/edc8099c-62c6-454e-bad5-5b611cded330).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Paystack donations

The `/donate` route initializes transactions on the server, redirects donors to Paystack's
hosted checkout, and verifies the returned reference on the server before showing success.
The Paystack secret key is never sent to the browser.

1. Copy `.env.example` to `.env.local`.
2. Add a Paystack test secret key and set `PAYSTACK_CURRENCY` to a currency enabled on the
   Paystack account.
3. Set `SITE_URL` to the deployed site's public origin. During local development the current
   request origin is used when `SITE_URL` is omitted.
4. In Paystack test mode, complete a donation and confirm that the return screen shows a
   verified contribution before switching to a live secret key.

Monthly giving is enabled only when `PAYSTACK_MONTHLY_PLANS` contains Paystack monthly plan
codes. Its JSON keys are amounts in the currency's subunit, so `2500` represents `25.00`.
For example:

```dotenv
PAYSTACK_MONTHLY_PLANS={"2500":"PLN_your_25_plan","5000":"PLN_your_50_plan"}
```

Keep `PAYSTACK_SECRET_KEY` server-side. Do not prefix it with `VITE_` or commit a real key.
