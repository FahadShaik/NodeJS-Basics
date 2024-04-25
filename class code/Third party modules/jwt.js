import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({ path: "./config/dev.env" });
const secretKey = process.env.S_KEY;
// console.log(secretKey);

let userData = {
  email: "fahad@gamil.com",
  password: "abc",
};

let token = jwt.sign(userData, secretKey);
console.log(token);

let decryptDta = jwt.verify(token, secretKey);
console.log(decryptDta);
