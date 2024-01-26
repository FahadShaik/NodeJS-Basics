// first way to start the server

/* //Imported the Http module
const httpModule = require("http");

// now lets create a server

const server = httpModule.createServer((request, response) => {
  response.end(`<h1>hello Http server running.css
  jee</h1>`);
});

// For the server we need to host on somewhere on a particular address to listen the details

server.listen(1900, (err) => {
  if (err) throw err;
  console.log("Hosted the server successfully");
});
 */

// one liner to start the server

require("http")
  .createServer((request, response) => {
    response.end(`<h1>good to go</h1>`);
  })
  .listen(9000, () => {
    console.log("server running successfully");
  });
