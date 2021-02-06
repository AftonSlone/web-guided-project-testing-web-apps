import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App without errors", () => {
  render(<App />);
});

test("renders the app header", () => {
  //Arrange: setting up of our react component
  const app = render(<App />);

  //Act: extracting the part of dom we want to test. Doing the behavoir
  const header = screen.getByText(/Add New Animal/i);

  //Assert: testing that change exists
  expect(header).toBeInTheDocument();
  expect(header).toBeTruthy();
  expect(header).toHaveTextContent(/Add New Animal/i);
  expect(header).not.toBeFalsy();
});
