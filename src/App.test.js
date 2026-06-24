import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders QTify application", () => {
  render(<App />);

  const textElement = screen.getByText(/100 Thousand Songs, ad-free/i);

  expect(textElement).toBeInTheDocument();
});