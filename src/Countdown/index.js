import { number } from "prop-types";
import React from "react";

import "./styles.css";

export default function Countdown({ initialCount = 100, step = 1 }) {
  const [count, setCount] = React.useState(initialCount);
  const reset = () => setCount(initialCount);
  const decrement = () => setCount(Math.max(count - step, 0));

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
