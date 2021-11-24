import { render, screen } from "@testing-library/react";
import { toParagraphs } from ".";

const { defaultText, paragraphs } = {
  defaultText: "This is test text. This is some more test text.",
  paragraphs: [
    <Text p="8px 0">This is test text.</Text>,
    <Text p="8px 0">This is some more test text.</Text>,
  ],
};

test("toParagraphs", () => {
  render(toParagraphs(defaultText));
  expect(screen.getByText("This is test text.")).toBeInTheDocument();
  expect(screen.getByText("This is some more test text.")).toBeInTheDocument();
});
