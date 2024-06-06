# Introduction

This is a simple web application that is essentially a form for entering a into a contest.

Things that it should do:

- validate form inputs
- handle form submission by:
  - sending form data to be stored into the DB
  - updating page to show that the form has been submitted
- have the ability return to the form after a submission

The look and feel:

- this will need to be responsive to the various different devices, mobile is the main focus but computer/browser is also important

## Database

This is using a postgres database that's hosted on Vercel.

## Development Setup

- Create a .env file and get the db information off of Vercel to put into it

## Folder Structure

- `app/` >> contains core functionality
  - `_components/` >> contains React components
  - `_lib/` >> contains functions that does important things that doesn't need to be exposed
  - the entry to the app is through the `page.tsx` at this level, all other app routes are created by having a folder with a `page.tsx` inside, see [NextJS' docs here](https://nextjs.org/docs/app/building-your-application/routing#roles-of-folders-and-files) for details. For example:
    - `info/` >> this would be a route of `~/info`
      - `page.tsx` >> this would be what's shown at `~/info`
- `public/` >> resources/images

---

# NextJS Bootstrapped Application

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
