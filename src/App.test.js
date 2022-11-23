import React from "react";
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";  // optional
import userEvent from "@testing-library/user-event";
import App from './App';

describe("App component", () => {
  it("renders correct heading", () => {
    const { getByRole } = render(<App />);
    expect(screen.getByText('We ain\'t capping')).toBeInTheDocument()
  });
});

describe("Shop button", () => {
  it("renders correct page", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: "Shop Now" });

    userEvent.click(button);

    expect(screen.getByText(/Cotton twill cap/i)).toBeInTheDocument()
  });
});

test('full app rendering/navigating', async () => {
  render(<App />)

  // verify page content for default route
  expect(screen.getByText(/Copyright/i)).toBeInTheDocument()

  await userEvent.click(screen.getByText(/Home/i))
  // verify page content for default route
  expect(screen.getByText(/The best caps from all around the world/i)).toBeInTheDocument()

  // verify page content for expected route after navigating
  await userEvent.click(screen.getByText(/Products/i))
  expect(screen.getByText(/Cotton twill cap/i)).toBeInTheDocument()

  // verify page content for expected route after navigating
  await userEvent.click(screen.getByText(/About/i))
  expect(screen.getByText(/About Capstore/i)).toBeInTheDocument()
})

test('Add product to cart', async () => {
  const { container } = render(<App />);

  await userEvent.click(screen.getByText(/Products/i))
  // verify page content for default route
  expect(screen.getByText(/Cotton twill cap/i)).toBeInTheDocument()

  const button = screen.getAllByText("Add to cart");

  userEvent.click(button[0]);

  expect(screen.getByRole("heading", { name: "Total: €13.99"}).textContent).toMatch("Total: €13.99");

  userEvent.click(button[0]);

  expect(screen.getByRole("heading", { name: "Total: €27.98"}).textContent).toMatch("Total: €27.98");
})