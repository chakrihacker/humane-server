# Setup Instructions

## Assumptions

Check **.env** it contains **postgres** connection string

- user name is johndoe
- password is randompassword
- db name is humane

change them or crete them accordingly

1. `npm install`
2. `npx prisma migrate up --expermiental`
3. `npm run dev`

It opens a server at `localhost:4000`
