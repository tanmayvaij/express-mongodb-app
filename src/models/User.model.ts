import { Schema, model } from "mongoose";

export const User = model(
  "user",
  new Schema({
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  })
);
