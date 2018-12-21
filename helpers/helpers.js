const reducer = (score, element, index, array) => {
  if (index >= 10) {
    //Stop if we reach the "11th" frame
    return score;
  }

  if (element.includes("/")) {
    //Add 10 + the next throw if we encounter a spare
    return score + 10 + assignValue(array[index + 1][0]);
  }

  if (element === "x") {
    // Add 10 + the next two throws if we encounter a strike
    return score + 10 + handleStrike(index, array);
  }

  return score + assignValue(element[0]) + assignValue(element[1]);
};

const assignValue = x => {
  if (x === "x") {
    return 10;
  }
  return parseInt(x);
};

const handleStrike = (i, parentArr) => {
  // Will only be called with index and array from reducer
  let nextFrame = parentArr[i + 1];
  switch (nextFrame.length) {
    case 1:
      return assignValue(nextFrame) + assignValue(parentArr[i + 2][0]);
    case 2:
      if (nextFrame.includes("/")) {
        return 10;
      }
      return assignValue(nextFrame[0]) + assignValue(nextFrame[1]);
  }
};

module.exports = { reducer };
