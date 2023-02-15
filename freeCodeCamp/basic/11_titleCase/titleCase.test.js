const titleCase = require("./titleCase");

xtest("titlecases a string", () => {
  expect(titleCase("I'm a little tea pot")).toBe("I'm A Little Tea Pot");
  expect(titleCase("sHoRt AnD sToUt")).toBe("Short And Stout");
  expect(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")).toBe(
    "Here Is My Handle Here Is My Spout"
  );
});
