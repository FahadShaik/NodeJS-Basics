const fsModule = require("fs");

// to read the data synchronously
let data = fsModule.readFileSync("dummy.txt", "utf-8");
console.log(data);
