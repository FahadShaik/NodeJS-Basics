/*Import of OS module from NodeJs */
const osModule = require("os");
// import osModule from "os";

console.log(osModule.platform()); // which platform
console.log(osModule.machine()); // which machine it is running on
