const fs = require("fs");
const helpers = require("./helpers/helpers.js");

const callback = (err, data) => {
  if (err) throw err;
  let userInput = data.replace(/\r/g, "").split("\n"); // rename this variable
  userInput.forEach(element => {
    console.log(tallyScore(element.split("-"))); // this calls the main function on each game in input.txt
  });
};
fs.readFile("./data/input.txt", "utf8", callback);

const tallyScore = inputArr => {
  // takes in an array of frames
  let frameByThrow = inputArr.map(helpers.initializeFrame); // splits frames into two throws
  return frameByThrow.reduce(helpers.reducer, 0);
}; //returns total score at the end of game
module.exports = { tallyScore };
