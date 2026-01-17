const fs = require("fs");

function log(message) {
  fs.appendFileSync("events.log", message + "\n");
}

module.exports = { log };
