const fsModule = require("fs");

// to read the data synchronously
let data = fsModule.readFileSync("dummy.txt", "utf-8");
console.log(data);

// to read the data asynchronously
fsModule.readFile("dummy.txt", "utf-8", (err, data) => {
  //reading and adding the same data to the new file
  fsModule.writeFile("newData.txt", data, (error) => {
    if (error) throw error;
    console.log(data, "success");
  });
});
