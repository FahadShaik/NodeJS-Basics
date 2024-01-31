const tokenJWT = require("jsonwebtoken");
//step1
const user = {
  email: "Hello@gmail.com",
  password: "abc123",
};

//generate token
const token = tokenJWT.sign(user, "mickeymouse", { expiresIn: 60 * 60 });

//verify token
tokenJWT.verify(token, "mickeymouse", (err, newPayload) => {
  if (err) throw err;
  console.log(newPayload);
});
