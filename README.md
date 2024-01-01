# Very basic typescript express mongodb server

## Stack

- Typescript
- Express.js
- MongoDB
- Mongoose
- Mocha and Chai
- Dotenv

## Getting started

### Install

Requires Node.js v20 (or lower, idk) to work.

After cloning the repository, install the dependencies:

```bash
npm install
```

or (for yarn):

```bash
yarn
```

Then run `npm run dev:watch or yarn dev:watch` to start the server in development mode.

### Development options

Create `.env.local` file and copy&paste the contents from [.env.sample](./.env.sample) to it.

Then, change the options to match your local environment, like MongoDB URI and app port.

### ONLY IF NEEDED: `process.env` types

Edit the [types/environment.d.ts](types/environment.d.ts) to make typings for environment variables.
