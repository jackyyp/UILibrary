This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## About

Basically just exploring how [shadcn/ui](https://ui.shadcn.com/docs) can save some time for frontend with React (w/ customizable components).
It includes some common components like

- navbar, sidebar , card, type-safe form (have to use TypeScript)

Also, the use of [framer-motion](https://www.framer.com/motion/) library to add some animation.

Finally, how frontend can interact with backend

## Getting Started

First, run the development server:

```bash
npm run dev
# or
# yarn dev
# # or
# pnpm dev
# # or
# bun dev
```

Then, install the required depenencies. (shadcn/ui,framer-motion,next)

```bash
cd my-app
npm install
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
checkout 'layout.js' for more

## Learn More

### Frontend

just treat Next like React

shadcn/ui CLI should be setup already , if not , checkout [here](https://ui.shadcn.com/docs/installation/next)
to add a component from shadcn/ui, run this command

```bash
npx shadcn-ui@latest add  [component-name]
```

- [Next.js Documentation](https://nextjs.org/docs) - Next.js features and API.
- [shadcn/ui UI List](https://ui.shadcn.com/docs) - Shadcn/ui UI library and implementation.
- [framer-motion](https://www.framer.com/motion/) - Adding ready-to-use animation on top of the UI.

### Backend

While exploring shadcn/ui,
I wrote a backend API using nextjs and mongoose. You may try it out as well using your own MongoDB Atlas.

please change db path in lib/mongodb/db.js, and add DB_PASS by creating a new .env.local

I assume its more or less writing API to db?

- Backend: Express? Next? ...
- Database: MySQL? MongoDB?...
- ORM: Prisma? Mongoose? Sequelize? ...

## Deploy

I think we are going to deploy on aws ec2 through ssh??

<!-- ~~ The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details. ~~ -->
