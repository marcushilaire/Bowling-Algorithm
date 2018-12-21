const logic = require("../logic.js");
let input = {
  strikes: "x-x-x-x-x-x-x-x-x-x-xx",
  spares: "5/-5/-5/-5/-5/-5/-5/-5/-5/-5/-5",
  openGame: "09-18-27-36-45-54-63-72-81-90",
  endSpare: "09-18-27-36-45-54-63-72-81-7/-5",
  midSpare: "24-35-24-32-45-5/-34-23-45-23",
  multiSpare: "7/-5/-6/-36-81-63-8/-53-27-9/-5",
  multiStrike: "x-x-9/-43-53-72-x-72-72-5/-7",
  endStrikes: "53-26-36-4/-53-8/-x-x-35-x-x9"
};

test("Is the score properly tallied per game", () => {
  expect(logic.tallyScore(input.strikes)).toBe(300);
  expect(logic.tallyScore(input.spares)).toBe(150);
  expect(logic.tallyScore(input.openGame)).toBe(90);
  expect(logic.tallyScore(input.endSpare)).toBe(96);
  expect(logic.tallyScore(input.midSpare)).toBe(73);
  expect(logic.tallyScore(input.multiSpare)).toBe(118);
  expect(logic.tallyScore(input.multiStrike)).toBe(141);
  expect(logic.tallyScore(input.endStrikes)).toBe(146);
});
