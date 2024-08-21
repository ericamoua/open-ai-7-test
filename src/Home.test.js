import { render, screen } from "@testing-library/react";
import Home from "../src/pages/Home";
import React from "react";


test("Always true test", () => {
  expect(true).toBe.true;
});

test("check header test", () => {
  render(<Home/>);
  const header = screen.getByText(/Your guided path to programming enlightenment/i);
  expect(header).toBeInTheDocument();
})

test("check main button test", () => {
  render(<Home/>);
  const button = screen.getByText(/Begin Journey/i);
  expect(button).toBeInTheDocument();
});

test('checks main logo with correct image and alt text', () => {
  render(<Home/>);
  const logo = screen.getByAltText('lrnr-logo');
  expect(logo).toBeInTheDocument();
  expect(logo).toHaveAttribute('alt', 'lrnr-logo');
});

test("check personalized quizzes", () => {
  render(<Home/>);
  const heading = screen.getByText(/Personalized Quizzes/i);
  expect(heading).toBeInTheDocument();
  expect(heading).toHaveAttribute('class', 'center');
});


test ("check material icons", () => {
  render(<Home/>);
  const icon = screen.getByText(/flash_on/i);
  expect(icon).toBeInTheDocument();
  expect(icon).toHaveAttribute('class', 'medium material-icons');
})