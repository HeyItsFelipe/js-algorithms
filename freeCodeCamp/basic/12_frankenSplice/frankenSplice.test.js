const frankenSplice = require("./frankenSplice");

xtest("frankensplices two arrays", () => {
  expect(frankenSplice([1, 2, 3], [4, 5], 1)).toBe([4, 1, 2, 3, 5]);
  expect(frankenSplice([1, 2], ["a", "b"], 1)).toBe(["a", 1, 2, "b"]);
  expect(
    frankenSplice(
      ["claw", "tentacle"],
      ["head", "shoulders", "knees", "toes"],
      2
    )
  ).toBe(["head", "shoulders", "claw", "tentacle", "knees", "toes"]);
  expect(frankenSplice([1, 2, 3, 4], [], 0)).toBe([1, 2, 3, 4]);
});

xtest("have input arrays been mutated", () => {
  let x = [1, 2, 3];
  let y = ["a", "b", "c"];
  let z = 2;
  Object.freeze(x);
  Object.freeze(y);
  try {
    expect(frankenSplice(x, y, z)).toHaveReturned();
  } catch {
    throw new Error("Expected input arrays to not be mutated.");
  }
});
