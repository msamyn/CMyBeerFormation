import { number } from "prop-types";
import React from "react";
import { useCounter } from "../hooks";

import "./styles.css";

export default function Countdown({ initialCount = 100, step = 1 }) {
  const [count, { decrement, reset }] = useCounter(initialCount, step);

  return (
    <>
      <a role="timer" aria-live="polite" className="countdown-number" href="/">
        {count}
      </a>
      <button className="countdown-button" onClick={decrement}>
        Countdown
      </button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

Countdown.propTypes = {
  initialCount: number,
  step: number,
};
