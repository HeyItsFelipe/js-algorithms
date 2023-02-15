const bouncer = require("./bouncer");

xtest("removes all falsy values from array", () => {
  expect(bouncer([7, "ate", "", false, 9])).toBe([7, "ate", 9]);
  expect(bouncer(["a", "b", "c"])).toBe(["a", "b", "c"]);
  expect(bouncer([false, null, 0, NaN, undefined, ""])).toBe([]);
  expect(bouncer([null, NaN, 1, 2, undefined])).toBe([1, 2]);
});

xtest("has input array been mutated", () => {
  let x = [1, 2, 3];
  Object.freeze(x);
  try {
    expect(bouncer(x)).toHaveReturned();
  } catch {
    throw new Error("Expected input array to not be mutated.");
  }
});
