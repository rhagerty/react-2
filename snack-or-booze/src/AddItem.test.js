import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AddItem from "./AddItem";

it("renders without crashing", function () {
  render(<AddItem />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<AddItem />);
  expect(asFragment()).toMatchSnapshot();
});

it("handles button clicks", function () {
  const { getByText } = render(<AddItem />);
  const cardTitle = getByText("What type of menu item would you like to add?");

  // click on the button
  fireEvent.click(getByText("Snack"));

  // is the count different?
  const snackLink = getByText(/create/i);
  expect(snackLink).toBeInTheDocument();
});
