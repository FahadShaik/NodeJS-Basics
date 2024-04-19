import fs from "fs";
fs.readFile("dummy.json", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
  console.log(typeof data);

  fs.writeFile("employee.json", data, (err) => {
    if (err) throw err;
    console.log("data written successfully");
  });
});
