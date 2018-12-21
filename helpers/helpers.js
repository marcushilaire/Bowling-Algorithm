const assignValue = x => {
  switch (x) {
    case "x":
      console.log(10);
      return 10;
    default:
      console.log(parseInt(x));
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
  assignValue,
  initializeFrame
};
