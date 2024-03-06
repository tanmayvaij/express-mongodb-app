import { connect } from "mongoose";

export const connectToDatabase = () => {
  connect(process.env.MONGO_URI!)
    .then(() => {
      console.log("Connected to database successfully");
    })
    .catch((err) => {
      console.error(err);
    });
};
