const fs = require("fs");
const helpers = require("./helpers/helpers.js");
let input = {
  strikes: "x-x-x-x-x-x-x-x-x-x-xx", //300
  spares: "5/-5/-5/-5/-5/-5/-5/-5/-5/-5/-5", //150
  openGame: "09-18-27-36-45-54-63-72-81-90", //90
  endSpare: "09-18-27-36-45-54-63-72-81-7/-5", //96
  midSpare: "24-35-24-32-45-5/-34-23-45-23", //73
  multiSpare: "7/-5/-6/-36-81-63-8/-53-27-9/-5", //118
  randomStrikes: "x-x-9/-43-53-72-x-72-72-5/-7" //141
};

//handle Input.txt***
const callback = (err, data) => {
  if (err) throw err;
  let userInput = data.replace(/\r/g, "").split("\n"); // rename this variable
  userInput.forEach(element => {
    console.log(tallyScore(element.split("-"))); // this calls the main function on each game in input.txt
  });
};
fs.readFile("./data/input.txt", "utf8", callback);
// ***

const tallyScore = inputArr => {
  // takes in an array of frames
  let score = 0;

  let frameByThrow = inputArr.map(helpers.initializeFrame); // splits frames into two throws
  // console.log(frameByThrow);
  return frameByThrow.reduce(helpers.reducer, 0);
}; //returns total score at the end of game
