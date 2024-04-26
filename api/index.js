import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => console.log("MongoDb is connected!"))
  .catch((err) => console.log(err));

const app = express();

app.listen(7000, () => {
  console.log("Server is running on port 7000!");
});