const fs = require("fs");
const helpers = require("./helpers/helpers.js");

const handleTextInput = (err, data) => {
  if (err) throw err;
  let inputFromText = data.replace(/\r/g, "").split("\n"); // rename this variable
  inputFromText.forEach(element => {
    // console.log(tallyScore(element.split("-"))); // this calls the main function on each game in input.txt
  });
};
fs.readFile("./data/input.txt", "utf8", handleTextInput);

const tallyScore = inputString => {
  // let frameByThrow = inputArr.map(helpers.initializeFrame); // splits frames into two throws
  let frameArray = inputString.split("-");
  return frameArray.reduce(helpers.reducer, 0);
  return frameByThrow.reduce(helpers.reducer, 0);
}; //returns total score at the end of game
module.exports = { tallyScore };
