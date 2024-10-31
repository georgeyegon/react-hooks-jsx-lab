// About.test.js
import { render, screen } from '@testing-library/react';
import About from '../components/About'; // Adjust the path accordingly
import '@testing-library/jest-dom';

describe("About Component", () => {
  test("renders an <img> element with the correct attributes", () => {
    render(<About />);
    const img = screen.getByAltText("I made this");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "https://i.imgur.com/mV8PQxj.gif");
  });
});
