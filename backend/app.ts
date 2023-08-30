import { ApolloServer } from "apollo-server-express";
import { dbConnection } from "./infrastructure/database/database.config";
import { deviceResolvers } from "./infrastructure/graphql/resolvers/device.resolvers";
import { deviceTypeDefs } from "./infrastructure/graphql/schema/device.typeDefs";
import cors from "cors";
import dotenv from "dotenv";
import express = require("express");

const port = process.env.PORT || 8080;

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

async function startServer() {
  const server = new ApolloServer({
    typeDefs: [deviceTypeDefs],
    resolvers: [deviceResolvers],
  });

  await server.start();
  server.applyMiddleware({ app });
}

startServer();
dbConnection();

app.listen(port, () => {
  console.log("Servidor corriendo en puerto", port);
});
