import express from "express";
import dotenv from "dotenv";
import productRouter from "./routes/productRouter.js";
import morgan from "morgan";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config({ path: "./config/dev.env" });

const host = process.env.HOST;
const port = process.env.PORT;
const dbURL = process.env.LOCAL_MONGODB_URL;

let app = express();
//to read form data we need to use body parser or express.json()

app.use(express.json());

// to get the entry points info
app.use(morgan("tiny"));
//to get the cors activated to fetch data from backend to frontend
app.use(cors());

app.get("/", (req, resp) => {
  resp.send("Root Request");
});

app.use("/products/", productRouter);

mongoose
  .connect(dbURL)
  .then((resp) => {
    console.log("Db connection successfull");
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

app.listen(port, host, (err) => {
  if (err) throw err;
  console.log("step1");
  console.log(`Server Running... http://${host}:${port}`);
});
