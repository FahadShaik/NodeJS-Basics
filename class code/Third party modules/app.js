const bcrypt = require("bcrypt");

let user = {
  username: "Shaik Fahad",
  email: "Shaik@123.co",
  cc: "1222 2222 3333 4444",
  password: "LoveNodeJS",
};

const salt = bcrypt.genSaltSync(10);
const password = bcrypt.hashSync(user.password, salt);

console.log(user.password);
console.log(password);

user = { ...user, password: password };

let flag = bcrypt.compareSync("LoveNodeJS", user.password);
console.log(flag);
