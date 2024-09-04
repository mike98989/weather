import { render, screen, fireEvent } from "@testing-library/react";
import PasswordInput from "./InputPasswordComponent";
import { describe, test, expect } from "vitest";

describe("Should render password input and check password field if it contains alpha numeric values, one number and one upper case", () => {
  test("It should detect error message if alpha numeric values and numbers are absent", () => {
    render(<PasswordInput />);
    const input = screen.getByTestId("password-input");
    fireEvent.change(input, { target: { value: "abcdefijklm" } });
    const errorContainer = screen.getByTestId("error-message");
    expect(errorContainer).toBeInTheDocument();
  });

  test("It should detect error message if only numbers are present", () => {
    render(<PasswordInput />);
    const input = screen.getByTestId("password-input");
    fireEvent.change(input, { target: { value: "123456789" } });
    const errorContainer = screen.getByTestId("error-message");
    expect(errorContainer).toBeInTheDocument();
  });

  test("It should not detect error message if alpha numeric values and numbers are present", () => {
    render(<PasswordInput />);
    const input = screen.getByTestId("password-input");
    fireEvent.change(input, { target: { value: "P1abcdefgh" } });
    expect(screen.queryByTestId("error-message")).not.toBeInTheDocument();
  });
});
