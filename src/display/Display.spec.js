// Test away!
import React from "react";
import Display from "./Display.js";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

//can be used to skip tests
// describe.skip
// it.only

describe("</Display", () => {
  it("renders without crushing", () => {
    render(<Display />);
  });

  it("open and unlocked", () => {
    const display = render(<Display closed={false} locked={false} />);
    display.getByText(/unlocked/i);
    display.getByText(/open/i);
    expect(display.queryByText(/closed/i)).toBe(null);
  });

  it("closed and unlocked", () => {
    const { getByText, queryByText } = render(
      <Display closed={true} locked={false} />
    );
    const unlock = getByText(/unlocked/i);
    //console.log("unlock", unlock);
    // expect(unlock.className).toMatch(/\bgreen-led\b/i);
    expect(unlock).toHaveClass("green-led");
    getByText(/closed/i);
    expect(queryByText(/closed/i)).toBeTruthy();
  });
});
