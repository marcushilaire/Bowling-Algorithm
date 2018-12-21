const fs = require("fs");
const helpers = require("./helpers/helpers.js");
let userOptions = process.argv.splice(2);
const handleTextInput = (err, data) => {
  if (err) throw err;
  let inputFromFile = data.replace(/\r/g, "").split("\n");
  inputFromFile.forEach(element => {
    console.log(tallyScore(element)); // this calls the main function on each game in input.txt
  });
};

const tallyScore = inputString => {
  let frameArray = inputString.split("-");
  let finalScore = frameArray.reduce(helpers.reducer, 0);
  return `The final score for the frames: ${inputString} is ${finalScore}`;
}; //returns total score at the end of game

const main = optionsArr => {
  switch (optionsArr[0].toLowerCase()) {
    case "single":
      console.log(` running the single test`);
      console.log(tallyScore(optionsArr[1]));
      break;
    case "multiple":
      fs.readFile("./data/input.txt", "utf8", handleTextInput);
      break;
  }
};
main(userOptions);
module.exports = { tallyScore };
