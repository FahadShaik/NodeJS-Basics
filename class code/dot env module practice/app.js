const http = require("http");
const dotenv = require("dotenv");

let verify = dotenv.config({ path: "./config/config.env" });
console.log(verify);

const host = process.env.HOST;
const port = process.env.PORT;
console.log(host, port);

const server = http.createServer((req, resp) => {
  resp.end("<h1>Hello MOTO</h1>");
});

server.listen(port, host, (err) => {
  console.log(port);
  if (err) throw err;

  console.log(`Server running on port : http://${host}:${port}`);
});
