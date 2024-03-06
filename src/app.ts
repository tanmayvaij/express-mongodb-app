import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { connectToDatabase } from "./database";

config();

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Hello Docker Compose" });
});

app.listen(5000, () => {

  connectToDatabase()

  console.log("Server started successfully");
});
