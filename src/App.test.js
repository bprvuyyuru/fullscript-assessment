import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';
import * as ReactDOM from 'react-dom';
import userEvent from '@testing-library/user-event'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Fullsplash/i);
  expect(linkElement).toBeInTheDocument("Fullsplash");
});


test('Checking the heading', () => {
  const root = document.createElement("div");
  ReactDOM.render(<App />, root);
  expect(root.querySelector("h1").textContent).toBe("Fullsplash")
});

test('Checking the paragraph', () => {
  const root = document.createElement("div");
  ReactDOM.render(<App />, root);
  expect(root.querySelector("p").textContent).toBe("The internet’s source of freely usable images.")
});

test('Testing the button', () => {
  const root = document.createElement("div");
  ReactDOM.render(<App />, root);
  expect(root.querySelector("button").textContent).toBe("Search")
});

test('type', () => {
  render(<textarea />)

  userEvent.type(screen.getByRole('textbox'), 'Hello,{enter}World!')
  expect(screen.getByRole('textbox')).toHaveValue('Hello,\nWorld!')
})