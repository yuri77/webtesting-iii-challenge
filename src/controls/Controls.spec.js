// Test away!

import React from "react";
import Controls from "./Controls";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

//test closed, ulocked and button click activity
afterEach(cleanup);
describe("</Controls", () => {
  it("renders without crushing", () => {
    render(<Controls />);
  });
  it("open and unlocked", () => {
    const closeSpy = jest.fn();
    const lockSpy = jest.fn();

    const { getByText } = render(
      <Controls
        closed={false}
        locked={false}
        toggleLocked={lockSpy}
        toggleClosed={closeSpy}
      />
    );
    const closeBtn = getByText(/close gate/i);
    const lockBtn = getByText(/lock gate/i);

    //checking button disabled status
    expect(closeBtn.disabled).toBeFalsy();
    expect(lockBtn.disabled).toBeTruthy();

    //checking button firing event
    fireEvent.click(closeBtn);
    expect(closeSpy).toBeCalled();

    fireEvent.click(lockBtn);
    expect(lockSpy).not.toBeCalled();
  });

  it("closed and unlocked", () => {
    const closeSpy = jest.fn();
    const lockSpy = jest.fn();

    const { getByText } = render(
      <Controls
        closed={true}
        locked={false}
        toggleLocked={lockSpy}
        toggleClosed={closeSpy}
      />
    );
    const closeBtn = getByText(/open gate/i);
    const lockBtn = getByText(/lock gate/i);

    //checking button disabled status
    expect(closeBtn.disabled).toBeFalsy();
    expect(lockBtn.disabled).toBeFalsy();

    //checking button firing event
    fireEvent.click(closeBtn);
    expect(closeSpy).toBeCalled();

    fireEvent.click(lockBtn);
    expect(lockSpy).toBeCalled();
  });

  it("closed and locked", () => {
    const closeSpy = jest.fn();
    const lockSpy = jest.fn();

    const { getByText } = render(
      <Controls
        closed={true}
        locked={true}
        toggleLocked={lockSpy}
        toggleClosed={closeSpy}
      />
    );
    const closeBtn = getByText(/open gate/i);
    const lockBtn = getByText(/unlock gate/i);

    //checking button disabled status
    expect(closeBtn.disabled).toBeTruthy();
    expect(lockBtn.disabled).toBeFalsy();

    //checking button firing event
    fireEvent.click(closeBtn);
    expect(closeSpy).not.toBeCalled();

    fireEvent.click(lockBtn);
    expect(lockSpy).toBeCalled();
  });
});
