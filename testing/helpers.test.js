const helpers = require("../helpers/helpers.js");
test("Is the frame being initialized correctly?", () => {
  expect(helpers.initializeFrame("xx").toEqual(["x", "x"]));
});
