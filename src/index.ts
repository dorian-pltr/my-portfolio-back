// src/index.ts

import { createSchema, createYoga } from "graphql-yoga";
import { createServer } from "node:http";
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

const url = process.env.URL || "http://localhost";
const port = Number(process.env.PORT) || 4000;

server.listen(port, () => {
  console.info(`Server is running on ${url}:${port}/graphql`);
});
