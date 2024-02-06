let express = require("express");

// initialize the app(Step 1)
let app = express();
/**
 * API_URL: localhost:5000/
 * fields: empty
 * Access Type : Public
 * Method: Get
 */
app.get("/", (req, res) => {
  res.send("Root Request");
});
/**
 * API_URL: localhost:5000/signup
 * fields: Email, Password
 * Access Type : Public
 * Method: POST (Write(crud's create))
 */

app.post("/signup", (req, res) => {
  //business logic
  res.send("User registered successfully");
});
//Note this cannot be tested on the browser side , need to use post man tool to test post methods

app.listen(5000, (err) => {
  if (err) throw err;
  console.log("server running on port successfully (5000)");
});
