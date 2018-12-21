const fs = require("fs");
const helpers = require("./helpers/helpers.js");
let input = {
  strikes: "x-x-x-x-x-x-x-x-x-x-xx", //300
  spares: "5/-5/-5/-5/-5/-5/-5/-5/-5/-5/-5", //150
  openGame: "09-18-27-36-45-54-63-72-81-90" //90
};

//handle Input.txt***
const callback = (err, data) => {
  if (err) throw err;
  let userInput = data.replace(/\r/g, "").split("\n"); // rename this variable
  userInput.forEach(element => {
    //call the main function on each line of input.txt here
  });
};
fs.readFile("./data/input.txt", "utf8", callback);
// ***

const tallyScore = inputArr => {
  let score = 0;
  inputArr.forEach((element, i) => {
    console.log(element.length);
  });
  //   console.log(score);
};
console.log(helpers.initializeFrame(input.spares.split("-")[0]));
// module.exports = { counter };

//Take in a string
//if spare, add nextElement[0]
//if strike, add nextElement[0 and 1]
