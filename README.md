# Setup Instructions

## Assumptions

Check **.env** it contains **postgres** connection string

change them or create them accordingly

- user name is johndoe
- password is randompassword
- db name is humane

1.  `npm install`
2.  `npx prisma migrate up --expermiental` runs db migrations
3.  `npx prisma generate` generates prisma bindings and typescript types
4.  Run the following commands to seed data, it doesn't output anything

        `npx ts-node-dev seed/merchant.ts`

        `npx ts-node-dev seed/transaction.ts`

        `npx ts-node-dev seed/clientcontact.ts`

5.  `npm run dev`

It opens a server at `localhost:4000`
