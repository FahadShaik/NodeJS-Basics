const bcrypt = require("bcrypt");

let myDetails = {
  name: "fahad",
  password: "register",
  email: "fahd@psa.com",
};

const newPassword = bcrypt.hashSync(myDetails.password, 8);
// console.log(newPassword);
const newEmail = bcrypt.hashSync(myDetails.email, 8);
// console.log(newEmail);

myDetails = { ...myDetails, password: newPassword, email: newEmail };
console.log(myDetails);
