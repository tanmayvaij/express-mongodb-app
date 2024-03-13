import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { connectToDatabase } from "./database";
import { User } from "./models/User.model";

config();

const app = express();

app.use(cors());

app.get("/", async (req, res) => {

  try {

    const user = await User.findOne({ firstName: "Tanmay" });
    res.json(user);

  } 
  catch (err) {

    console.log(err);

    res.json({
      err: "Error occurred",
    });
  }
});

app.listen(5000, async () => {
  connectToDatabase();

  await User.create({
    firstName: "Tanmay",
    lastName: "Vaij",
    email: "tanmayvaij22@gmail.com",
  });

  console.log("Server started successfully");
});
