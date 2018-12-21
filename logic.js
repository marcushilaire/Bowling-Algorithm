const fs = require("fs");
const helpers = require("./helpers/helpers.js");
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
    // switch (element) {
    //   case "x":
    //     score += 10 + inputArr[i + 1] + inputArr[i + 2];
    // }
    // helpers.assignValue(element);
    console.log(element.length);
  });
  //   console.log(score);
};
tallyScore("x-x-x-x-x-x-x-x-x-x-xx".split("-"));

// module.exports = { counter };

//if spare, add nextElement[0]
//if strike, add nextElement[0 and 1]
