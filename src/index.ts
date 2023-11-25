// src/index.ts

import { createServer } from "node:http";
import { createSchema, createYoga } from "graphql-yoga";
import { schema } from "./schema";

const yoga = createYoga({
  schema: createSchema({
    typeDefs: schema,
    resolvers: {
      Query: {},
    },
  }),
});

const server = createServer(yoga);
const port = Number(process.env.API_PORT) || 4000;
server.listen(port, () => {
  console.info(`Server is running on http://localhost:${port}/graphql`);
});
