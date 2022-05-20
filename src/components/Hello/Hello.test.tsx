import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Hello } from "./Hello";

test("renders a message", () => {
  const { container } = render(<Hello text="hello" />);
  expect(container.firstChild).toMatchSnapshot();
});
