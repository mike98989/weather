import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import InputField from "./InputFieldComponent";

describe("Render input field component", () => {
  test("Render on screen", () => {
    render(<InputField placeHolder="Enter username" />);
    const inputFieldComponent = screen.getByTestId("input_field");
    expect(inputFieldComponent).toBeInTheDocument();
  });
});
