import { screen, waitForElementToBeRemoved } from "@testing-library/react";
import { render } from "../testUtils";

import HomeScreen from ".";

const progressbarElement = () => screen.getByRole("progressbar");

describe("HomeScreen", () => {
  it("displays a filter", () => {
    render(<HomeScreen />);
    expect(
      screen.getByRole("button", { name: "Catégorie" })
    ).toBeInTheDocument();
  });

  describe("while loading", () => {
    it("displays a progressbar", () => {
      render(<HomeScreen />);
      expect(progressbarElement()).toBeInTheDocument();
    });
  });

  describe("with data", () => {
    it("displays as beer", async () => {
      render(<HomeScreen />);
      await waitForElementToBeRemoved(progressbarElement());
      expect(
        screen.getByRole("heading", { level: 3, name: "Focal Banger" })
      ).toBeInTheDocument();
    });
  });
});
