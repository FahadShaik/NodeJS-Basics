import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/userRouter.js";

const app = express();
const verify = dotenv.config({ path: "./config/dev.env" });

let port = process.env.PORT;
let host = process.env.HOST_NAME;

app.get("/", (req, resp) => {
  resp.send("root request");
});

app.use("/user/", userRouter);

app.listen(port, host, (err) => {
  if (err) throw err;
  console.log(`server running : http://${host}:${port}`);
});
