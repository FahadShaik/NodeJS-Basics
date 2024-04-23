import dotenv from "dotenv";
import http from "http";

dotenv.config({ path: "./config/config.env" });

let port = process.env.PORT;
let host = process.env.HOST;

let server = http.createServer((req, res) => {
  res.end("Hello World");
});

server.listen(port, host, (err) => {
  if (err) throw err;
  console.log(`Server running successfully: http://${host}:${port}`);
});
