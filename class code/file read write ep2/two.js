import fs from "fs";

fs.readFile("userdata.json", "utf-8", (err, data) => {
  if (err) throw err;

  const userobj = JSON.parse(data);

  const femaleEmployees = userobj.filter((user) => {
    if (user.gender === "Female") {
      return user;
    }
  });

  fs.writeFile("female.json", JSON.stringify(femaleEmployees), (err) => {
    if (err) throw err;
    console.log("Data written successfully");
  });

  const maleEmployees = userobj.filter((user) => {
    if ((user.gender = "Male")) {
      return user;
    }
  });

  fs.writeFile("male.json", JSON.stringify(maleEmployees), (err) => {
    if (err) throw err;
    console.log("data written successfully (male emlpoyees)");
  });
});
