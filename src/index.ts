// src/index.ts

import { createSchema, createYoga } from "graphql-yoga";
import cron from "node-cron";
import { createServer } from "node:http";
import { prisma } from "./db";
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

cron.schedule("0 * * * *", async () => {
  try {
    const result = await prisma.$executeRaw`SELECT 1`;

    if (result) {
      console.info("Base de données accessible !");
    } else {
      console.error("Échec de la requête ping à la base de données.");
    }
  } catch (error) {
    console.error("Erreur lors du ping de la base de données :", error);
  }
});
