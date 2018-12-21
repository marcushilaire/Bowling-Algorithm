const fs = require("fs");
const helpers = require("./helpers/helpers.js");
let userOptions = process.argv.splice(2);

const tallyScore = inputString => {
  let frameArray = inputString.split("-");
  let finalScore = frameArray.reduce(helpers.reducer, 0);
  return `The final score for the frames: ${inputString} is ${finalScore}`;
};

const logFinalScore = x => {
  console.log(`${tallyScore(x)} \n`);
};

const handleTextInput = (err, data) => {
  if (err) throw err;
  let inputFromFile = data.replace(/\r/g, "").split("\n");
  inputFromFile.forEach(logFinalScore);
};

const handleUserInput = optionsArr => {
  if (optionsArr.length > 0) {
    // Calculate final score of all games passed to command line
    optionsArr.forEach(logFinalScore);
  } else {
    // Calculate scores in input.txt if non are passed through command line
    console.log("Reading scores from input.txt \n");
    fs.readFile("./data/input.txt", "utf8", handleTextInput);
  }
};

handleUserInput(userOptions);
module.exports = { tallyScore };
