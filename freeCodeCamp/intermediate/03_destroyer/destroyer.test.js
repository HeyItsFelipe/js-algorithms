const destroyer = require("./destroyer");

xtest("removes elements from an array", () => {
  expect(destroyer([1, 2, 3, 1, 2, 3], 2, 3)).toBe([1, 1]);
  expect(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)).toBe([1, 5, 1]);
  expect(destroyer([3, 5, 1, 2, 2], 2, 3, 5)).toBe([1]);
  expect(destroyer([2, 3, 2, 3], 2, 3)).toBe([]);
  expect(destroyer(["tree", "hamburger", 53], "tree", 53)).toBe(["hamburger"]);
  expect(
    destroyer(
      [
        "possum",
        "trollo",
        12,
        "safari",
        "hotdog",
        92,
        65,
        "grandma",
        "bugati",
        "trojan",
        "yacht",
      ],
      "yacht",
      "possum",
      "trollo",
      "safari",
      "hotdog",
      "grandma",
      "bugati",
      "trojan"
    )
  ).toBe([12, 92, 65]);
});
