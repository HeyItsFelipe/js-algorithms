const chunkArrayInGroups = require("./chunkArrayInGroups");

xtest(`splits a one dimensional array into a two dimensional array with a given length`, () => {
  expect(chunkArrayInGroups(["a", "b", "c", "d"], 2)).toBe([
    ["a", "b"],
    ["c", "d"],
  ]);
  expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)).toBe([
    [0, 1, 2],
    [3, 4, 5],
  ]);
  expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)).toBe([
    [0, 1],
    [2, 3],
    [4, 5],
  ]);
  expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)).toBe([
    [0, 1, 2, 3],
    [4, 5],
  ]);
  expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)).toBe([
    [0, 1, 2],
    [3, 4, 5],
    [6],
  ]);
  expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)).toBe([
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8],
  ]);
  expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)).toBe([
    [0, 1],
    [2, 3],
    [4, 5],
    [6, 7],
    [8],
  ]);
});
