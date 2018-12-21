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
module.exports = {
  assignValue
};
