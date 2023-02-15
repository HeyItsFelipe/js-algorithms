const mutation = require("./mutation");

xtest(`returns true if the string in the first element of the array 
contains all of the letters of the string in the second element of the array`, () => {
  expect(mutation(["hello", "hey"])).toBe(false);
  expect(mutation(["hello", "Hello"])).toBe(true);
  expect(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])).toBe(true);
  expect(mutation(["Mary", "Army"])).toBe(true);
  expect(mutation(["Mary", "Aarmy"])).toBe(true);
  expect(mutation(["Alien", "line"])).toBe(true);
  expect(mutation(["floor", "for"])).toBe(true);
  expect(mutation(["hello", "neo"])).toBe(false);
  expect(mutation(["voodoo", "no"])).toBe(false);
  expect(mutation(["ate", "date"])).toBe(false);
  expect(mutation(["Tiger", "Zebra"])).toBe(false);
  expect(mutation(["Noel", "Ole"])).toBe(true);
});
