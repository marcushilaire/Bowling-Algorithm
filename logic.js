const fs = require("fs");
const callback = (err, data) => {
  if (err) throw err;
  let carriageReturn = /\r/g;
  let userInput = data.replace(carriageReturn, "").split("\n"); // rename this variable
  userInput.forEach(element => {
    //call the main function on each line of input.txt here
  });
};
fs.readFile("./data/input.txt", "utf8", callback);
