import fs from "fs";

fs.readFile("userdata.json", "utf-8", (err, data) => {
  if (err) throw err;

  const userobj = JSON.parse(data);

  const femaleEmployees = userobj.filter((user) => {
    if (user.gender === "Female") {
      return user;
    }
  });

  const femaleJsonData = JSON.stringify(femaleEmployees);

  fs.writeFile("female.json", femaleJsonData, (err) => {
    if (err) throw err;
    console.log("Data written successfully");
  });

  const maleEmployees = userobj.filter((user) => {
    if ((user.gender = "Male")) {
      return user;
    }
  });

  const maleEmployeesJson = JSON.stringify(maleEmployees);

  fs.writeFile("male.json", maleEmployeesJson, (err) => {
    if (err) throw err;
    console.log("data written successfully (male emlpoyees)");
  });
});
