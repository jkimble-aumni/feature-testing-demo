import { toPigLatin } from ".";

const { defaultText, pigText } = {
  defaultText: "This is my test text. This is some more test text.",
  pigText:
    "isthay isay myay esttay exttay. isthay isay omesay oremay esttay exttay.",
};

test("toPigLatin", () => {
  expect(toPigLatin(defaultText)).toBe(pigText);
});
