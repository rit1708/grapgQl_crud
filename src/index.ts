// src/index.ts
import express from "express";
import { ApolloServer } from "apollo-server-express";
import typeDefs from "./schema";
import resolvers from "./controller";
import connectDB from "./db/db"; 

const startServer = async () => {
  const app: any = express();

  await connectDB();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();
  server.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log(`Server running at http://localhost:4000${server.graphqlPath}`);
  });
};

startServer().catch(err => console.error(err));
