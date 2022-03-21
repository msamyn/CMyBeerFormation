import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Countdown from ".";

const counterElement = () => screen.getByRole("timer");

const countdownButtonElement = () =>
  screen.getByRole("button", { name: /countdown/i });

const resetButtonElement = () => screen.getByRole("button", { name: /reset/i });

describe("Countdown", () => {
  describe("without any props", () => {
    it("renders counter", () => {
      render(<Countdown />);
      expect(counterElement()).toHaveTextContent(/^100$/i);
    });

    it("renders countdown element", () => {
      render(<Countdown />);
      expect(countdownButtonElement()).toBeInTheDocument();
    });

    it("renders reset element", () => {
      render(<Countdown />);
      expect(resetButtonElement()).toBeInTheDocument();
    });

    it("counts down while clik on countdown button", () => {
      render(<Countdown />);
      userEvent.click(countdownButtonElement());
      expect(counterElement()).toHaveTextContent(/^99$/i);
    });

    it("reset while clik on reset button", () => {
      render(<Countdown />);
      userEvent.click(countdownButtonElement());
      userEvent.click(countdownButtonElement());
      userEvent.click(countdownButtonElement());
      expect(counterElement()).toHaveTextContent(/^97$/i);
      userEvent.click(resetButtonElement());
      expect(counterElement()).toHaveTextContent(/^100$/i);
    });
  });

  describe("with a custom initialValue", () => {
    it("renders counter", () => {
      render(<Countdown initialCount={5} />);
      expect(counterElement(5)).toBeInTheDocument();
    });

    it("renders countdown element", () => {
      render(<Countdown initialCount={5} />);
      expect(countdownButtonElement()).toBeInTheDocument();
    });

    it("renders reset element", () => {
      render(<Countdown initialCount={5} />);
      expect(resetButtonElement()).toBeInTheDocument();
    });

    it("counts down while clik on countdown button", () => {
      render(<Countdown initialCount={5} />);
      userEvent.click(countdownButtonElement());
      expect(counterElement()).toHaveTextContent(/^4$/i);
    });
  });

  describe("with a custom step", () => {
    it("renders counter", () => {
      render(<Countdown step={2} />);
      expect(counterElement()).toHaveTextContent(/^100$/i);
    });

    it("renders countdown element", () => {
      render(<Countdown step={2} />);
      expect(countdownButtonElement()).toBeInTheDocument();
    });

    it("renders reset element", () => {
      render(<Countdown step={2} />);
      expect(resetButtonElement()).toBeInTheDocument();
    });

    it("counts down while clik on countdown button", () => {
      render(<Countdown step={2} />);
      userEvent.click(countdownButtonElement());
      expect(counterElement()).toHaveTextContent(/^98$/i);
    });
  });

  describe("and below 0", () => {
    it("at 0 not display negative number", () => {
      render(<Countdown step={2_000_000} />);
      userEvent.click(countdownButtonElement());
      expect(counterElement()).toHaveTextContent(/^0$/i);
    });
  });

  describe("while n-clicking button", () => {
    it("displays 0, and not negative number", () => {
      render(<Countdown step={50} />);
      userEvent.click(countdownButtonElement());
      userEvent.click(countdownButtonElement());
      expect(counterElement()).toHaveTextContent(/^0$/i);
    });

    it("does nothing while clicking on countdown button", () => {
      render(<Countdown step={50} />);
      userEvent.click(countdownButtonElement());
      userEvent.click(countdownButtonElement());
      userEvent.click(countdownButtonElement());
      expect(counterElement()).toHaveTextContent(/^0$/i);
    });

    it("reset on rest button", () => {
      render(<Countdown step={50} />);
      userEvent.click(countdownButtonElement());
      userEvent.click(countdownButtonElement());
      expect(counterElement()).toHaveTextContent(/^0$/i);
      userEvent.click(resetButtonElement());
      expect(counterElement()).toHaveTextContent(/^100$/i);
    });
  });
});
