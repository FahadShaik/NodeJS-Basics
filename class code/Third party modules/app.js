import express from "express";
import dotenv from "dotenv";
import path from "path";

const verify = dotenv.config({ path: "./config/dev.env" });
// console.log(verify);

// console.log(process.cwd());

const contact_file = path.join(process.cwd(), "contact.html");
console.log(contact_file);

const port = process.env.PORT;
const host = process.env.HOST_NAME;

const app = express();

//ROot tst
app.get("/", (req, resp) => {
  resp.send("Hello Express server");
});

app.get("/contact", (req, resp) => {
  resp.sendFile(contact_file);
});

app.listen(port, host, (err) => {
  if (err) throw err;
  console.log(`Server running successfully: http://${host}:${port}`);
});
