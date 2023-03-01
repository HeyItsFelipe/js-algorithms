const whatIsInAName = require("./whatIsInAName");

xtest("removes elements from an array", () => {
  expect(
    whatIsInAName(
      [
        { first: "Romeo", last: "Montague" },
        { first: "Mercutio", last: null },
        { first: "Tybalt", last: "Capulet" },
      ],
      { last: "Capulet" }
    )
  ).toBe([{ first: "Tybalt", last: "Capulet" }]);
  expect(
    whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], {
      apple: 1,
    })
  ).toBe([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }]);
  expect(
    whatIsInAName(
      [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
      { apple: 1, bat: 2 }
    )
  ).toBe([
    { apple: 1, bat: 2 },
    { apple: 1, bat: 2, cookie: 2 },
  ]);
  expect(
    whatIsInAName(
      [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
      { apple: 1, cookie: 2 }
    )
  ).toBe([{ apple: 1, bat: 2, cookie: 2 }]);
  expect(
    whatIsInAName(
      [
        { apple: 1, bat: 2 },
        { apple: 1 },
        { apple: 1, bat: 2, cookie: 2 },
        { bat: 2 },
      ],
      { apple: 1, bat: 2 }
    )
  ).toBe([
    { apple: 1, bat: 2 },
    { apple: 1, bat: 2, cookie: 2 },
  ]);
  expect(whatIsInAName([{ a: 1, b: 2, c: 3 }], { a: 1, b: 9999, c: 3 })).toBe(
    []
  );
  expect(
    whatIsInAName([{ a: 1, b: 2, c: 3, d: 9999 }], { a: 1, b: 9999, c: 3 })
  ).toBe([]);
});
