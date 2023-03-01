const diffArray = require("./diffArray");

xtest("returns the symmetric difference between two arrays", () => {
  expect(
    diffArray(
      ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
      ["diorite", "andesite", "grass", "dirt", "dead shrub"]
    )
  ).toBe(["pink wool"]);
  expect(
    diffArray(
      ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
      ["diorite", "andesite", "grass", "dirt", "dead shrub"]
    )
  ).toBe(["diorite", "pink wool"]);
  expect(
    diffArray(
      ["andesite", "grass", "dirt", "dead shrub"],
      ["andesite", "grass", "dirt", "dead shrub"]
    )
  ).toBe([]);
  expect(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])).toBe([4]);
  expect(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4])).toBe([
    "piglet",
    4,
  ]);
  expect(diffArray([], ["snuffleupagus", "cookie monster", "elmo"])).toBe([
    "snuffleupagus",
    "cookie monster",
    "elmo",
  ]);
  expect(diffArray([1, "calf", 3, "piglet"], [7, "filly"])).toBe([
    1,
    "calf",
    3,
    "piglet",
    7,
    "filly",
  ]);
});
