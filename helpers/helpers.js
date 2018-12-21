const reducer = (score, element, index, array) => {
  if (index >= 10) {
    return score;
  }
  if (element.includes("/")) {
    return score + 10 + assignValue(array[index + 1][0]);
  }
  if (element === "x") {
    return score + 10 + handleStrike(index, array);
  }
  return score + assignValue(element[0]) + assignValue(element[1]);
};

const assignValue = x => {
  if (x === "x") {
    return 10;
  } else {
    return parseInt(x);
  }
};

const handleStrike = (i, parentArr) => {
  let nextFrame = parentArr[i + 1];
  switch (nextFrame.length) {
    case 1:
      return assignValue(nextFrame) + assignValue(parentArr[i + 2][0]);
    case 2:
      if (nextFrame.includes("/")) {
        return 10;
      }
    default:
      return assignValue(nextFrame[0]) + assignValue(nextFrame[1]);
  }
};

const initializeFrame = x => {
  if (x.length > 1) {
    return Array.from(x);
  }
  return x;
};

module.exports = {
  reducer,
  initializeFrame
};
