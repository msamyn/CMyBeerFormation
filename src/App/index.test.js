import { render, screen } from "@testing-library/react";
import App from ".";

test("renders app title", () => {
  render(<App />);
  const title = screen.getByRole("heading", { level: 1, name: "🍻 CMyBeer" });
  expect(title).toBeInTheDocument();
});
