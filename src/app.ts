import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { connectToDatabase } from "./database";
import path from "path";
import { User } from "./models/User.model";

config();

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(cors());

app.use(express.urlencoded({ extended: true }))

app.get("/", async (_, res) => {
  const users = await User.find({}, {}, {});
  res.render("home", { users });
});

app.post("/", async (req, res) => {

  const { firstName, lastName, email } = req.body;

  if (!firstName || !lastName || !email) return res.render("/");

  await User.create({
    firstName,
    lastName,
    email,
  });

  res.redirect("/");
});

app.listen(5000, async () => {
  connectToDatabase();
  console.log("Server started successfully");
});
