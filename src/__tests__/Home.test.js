// src/__tests__/Home.test.js
import { render, screen } from '@testing-library/react';
import Home from '../components/Home'; // Adjust this path according to your structure
import '@testing-library/jest-dom';

describe("Home Component", () => {
  const name = "George";
  const city = "New York";

  test("renders a div with the correct ID", () => {
    const { container } = render(<Home name={name} city={city} />);
    expect(container.querySelector("#home")).toBeInTheDocument();
  });

  test("renders the h1 with the text 'Name is a Web Developer from City'", () => {
    render(<Home name={name} city={city} />);
    const h1 = screen.getByText(`${name} is a Web Developer from ${city}`);
    expect(h1).toBeInTheDocument();
    expect(h1.tagName).toBe("H1");
  });

  test("the h1 has an inline style attribute with a color of 'firebrick'", () => {
    render(<Home name={name} city={city} />);
    const h1 = screen.getByText(`${name} is a Web Developer from ${city}`);
    expect(h1).toHaveStyle({ color: "firebrick" });
  });
});
