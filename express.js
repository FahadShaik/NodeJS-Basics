let express = require("express");

// initialize the app(Step 1)
let app = express();

/**
 *API_URL: localhost:5000/
 Method: GET
 Fields: Not Required
 Access Type: Public
 */

//Routing
app.get("/", (req, res) => {
  res.send("Root request");
});
/**
 *API_URL: localhost:5000/user
 Method: GET
 Fields: Not Required
 Access Type: Public
 */
app.get("/user", (req, res) => {
  res.send("User data");
});
/**
 *API_URL: localhost:5000/employee
 Method: GET
 Fields: Not Required
 Access Type: Public
 */
app.get("/employee", (req, res) => {
  res.send("Employee data");
});
/**
 *API_URL: localhost:5000/employee/details
 Method: GET
 Fields: Not Required
 Access Type: Public
 */

app.get("/employee/details", (req, res) => {
  res.send("Employee Details data");
});

//Creating the server for that app
app.listen(5000, (err) => {
  if (err) throw err;
  console.log("Server is running on 5000");
});
