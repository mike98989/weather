import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ButtonComponent from "./ButtonComponent";
import { describe, expect, it } from "vitest";

// Tests
describe("Renders main button correctly", async () => {
  it("Should render the button and make sure svg spinner is visible on click", async () => {
    render(<ButtonComponent buttonText="Submit" className="" />);
    const buttonText = await screen.queryByText("Submit");
    expect(buttonText).toBeInTheDocument();
    const buttonElement = screen.getByRole("button", { name: /Submit/i });
    fireEvent.click(buttonElement);
    const spinnerElement = screen.getByRole("img", {
      name: "Loading spinner",
    });
    expect(spinnerElement).toBeVisible();
  });
});
