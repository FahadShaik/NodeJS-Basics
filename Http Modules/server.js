//Imported the Http module
const httpModule = require("http");

// now lets create a server

const server = httpModule.createServer((request, response) => {
  response.end("Hello, http server");
});

// For the server we need to host on somewhere on a particular address to listen the details

server.listen(1900, (err) => {
  if (err) throw err;
  console.log("Hosted the server successfully");
});
