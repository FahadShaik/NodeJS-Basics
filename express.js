let express = require("express");

// initialize the app(Step 1)
let app = express();

//Routing
app.get("/", (req, res) => {
  res.send("Root request");
});

//Creating the server for that app
app.listen(5000, (err) => {
  if (err) throw err;
  console.log("Server is running on 5000");
});
