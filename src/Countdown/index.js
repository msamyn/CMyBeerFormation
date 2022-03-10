import { number } from "prop-types";
import React from "react";
import useCounter from "../useCounter";

import "./styles.css";

export default function Countdown({ initialCount = 100, step = 1 }) {
  const [count, { decrement, reset }] = useCounter(initialCount, step);

  return (
    <>
      <p className="countdown-number">{count}</p>
      <button className="countdown-button" onClick={decrement}>
        ClickMe
      </button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

Countdown.propTypes = {
  initialCount: number,
  step: number,
};
