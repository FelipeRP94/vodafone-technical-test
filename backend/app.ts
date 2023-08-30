import dotenv from "dotenv";
import express = require("express");
import cors from "cors";
import { dbConnection } from "./infrastructure/database/database.config";

const port = process.env.PORT || 8080;

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

dbConnection();

app.listen(port, () => {
  console.log("Servidor corriendo en puerto", port);
});
