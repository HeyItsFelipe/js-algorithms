const reverseString = require("./reverseString");

xtest("reverses a string", () => {
  expect(reverseString("hello")).toBe("olleh");
  expect(reverseString("Howdy")).toBe("ydwoH");
  expect(reverseString("Greetings from Earth")).toBe("htraE morf sgniteerG");
});
