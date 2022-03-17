import { omit } from "ramda";
import React from "react";

const basketReducer = (state, { type, payload }) => {
  switch (type) {
    case "addToBasket": {
      const { id, count } = payload;
      return {
        ...state,
        [id]: state[id] === undefined ? count : state[id] + count,
      };
    }
    case "removeFromBasket": {
      const { id } = payload;
      console.log({ ...state, [id]: undefined });
      return omit([id], state);
    }
    case "add":
      return;
    case "del":
      return;
    default:
      break;
  }
};

export default function useBasket() {
  const [basket, dispatch] = React.useReducer(basketReducer, {});

  const addToBasket = (id, count) => () => {
    dispatch({ type: "addToBasket", payload: { id, count } });
  };

  const removeFromBasket = (id) => () => {
    dispatch({ type: "removeFromBasket", payload: { id } });
  };

  return { basket, addToBasket, removeFromBasket };
}
