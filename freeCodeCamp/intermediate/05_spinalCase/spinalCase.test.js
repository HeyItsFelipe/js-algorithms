const spinalCase = require("./spinalCase");

xtest("converts string to spinal case", () => {
  expect(spinalCase("This Is Spinal Tap")).toBe("this-is-spinal-tap");
  expect(spinalCase("thisIsSpinalTap")).toBe("this-is-spinal-tap");
  expect(spinalCase("The_Andy_Griffith_Show")).toBe("the-andy-griffith-show");
  expect(spinalCase("Teletubbies say Eh-oh")).toBe("teletubbies-say-eh-oh");
  expect(spinalCase("AllThe-small Things")).toBe("all-the-small-things");
});
