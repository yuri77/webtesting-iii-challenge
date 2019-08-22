// Test away!

import React from "react";
import Controls from "./Controls";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("</Display", () => {
  it("renders without crushing", () => {
    render(<Controls />);
  });
  it("open and unlocked", () => {
    const { getByText } = render(<Controls closed={false} locked={false} />);
    const closeBtn = getByText(/close gate/i);
    const lockBtn = getByText(/lock gate/i);
    expect(closeBtn.disabled).toBeFalsy();
    expect(lockBtn.disabled).toBeTruthy();
  });
});
