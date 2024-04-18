// const os = require("os");
// import os from "os";

function displayPlatfrom() {
  const spanSelect = document.getElementById("platform");
  spanSelect.innerHTML = navigator.platform;
}

displayPlatfrom();
