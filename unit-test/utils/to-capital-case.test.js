import { toCapitalCase } from ".";

const { capText, defaultText } = {
  defaultText: "This is test text. This is some more test text.",
  capText: "This Is Test Text. This Is Some More Test Text.",
};

test("toCapitalCase", () => {
  expect(toCapitalCase(defaultText)).toBe(capText);
});
