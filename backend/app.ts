import { ApolloServer } from "apollo-server-express";
import { dbConnection } from "./infrastructure/database/database.config";
import { deviceResolvers } from "./infrastructure/graphql/resolvers/device.resolvers";
import { deviceTypeDefs } from "./infrastructure/graphql/schema/device.typeDefs";
import cors from "cors";
import dotenv from "dotenv";
import express = require("express");

dotenv.config();

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const port = process.env.PORT || 8080;

const app = express();
app.use(cors(corsOptions));
app.use(express.json());

async function startServer() {
  const server = new ApolloServer({
    typeDefs: [deviceTypeDefs],
    resolvers: [deviceResolvers],
  });

  await server.start();
  server.applyMiddleware({
    app,
    cors: corsOptions,
  });
}

startServer();
dbConnection();

app.listen(port, () => {
  console.log("Servidor corriendo en puerto", port);
});
