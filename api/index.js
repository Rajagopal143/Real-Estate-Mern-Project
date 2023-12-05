import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./Router/user.router.js";
import authRouter from "./Router/auth.router.js";
dotenv.config();
const app = express();

app.use(express.json());
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Database connected success");
  })
  .catch((e) => console.log(e));
app.listen(3000, () => {
  console.log("server is connected in port 3000");
});
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);