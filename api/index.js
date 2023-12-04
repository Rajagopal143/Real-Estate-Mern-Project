import express from "express";
import mongoose from "moongoose";
import dotenv from "dotenv";
import userRouter from "./Router/user.router.js";
dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Database connected success");
    app.listen(3000, () => {
      console.log("server is connected in port 3000");
    });
  })
  .catch((e) => console.log(e));

app.use("/api/user", userRouter);