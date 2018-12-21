const reducer = (score, element, index, array) => {
  if (index === 10) {
    return score;
  }
  if (element.includes("/")) {
    return score + 10 + assignValue(array[index + 1][0]);
  }
  // console.log(element);
  return score + assignValue(element[0]) + assignValue(element[1]);
};

const assignValue = x => {
  if (x === "x") {
    return 10;
  } else {
    return parseInt(x);
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
