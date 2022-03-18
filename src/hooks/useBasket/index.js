import { omit } from "ramda";
import React from "react";
import { useLocalStorage } from "../useLocalStorage";

const basketReducer = (state, { type, payload }) => {
  switch (type) {
    case "addToBasket": {
      const { id, count } = payload;
      const newState = {
        ...state,
        [id]: state[id] === undefined ? count : state[id] + count,
      };
      setBasketStorageFunc(newState);
      return newState;
    }
    case "removeFromBasket": {
      const { id } = payload;
      const newState = omit([id], state);
      setBasketStorageFunc(newState);
      return newState;
    }
    case "add":
      return;
    case "del":
      return;
    default:
      break;
  }
};

let setBasketStorageFunc = Function.prototype;

export default function useBasket() {
  const [basketStorage, setBasketStorage] = useLocalStorage("basket", {});
  const [basket, dispatch] = React.useReducer(basketReducer, basketStorage);

  setBasketStorageFunc = (b) => setBasketStorage(b);

  const addToBasket = (id, count) => () => {
    if (count !== 0) {
      dispatch({ type: "addToBasket", payload: { id, count } });
    }
  };

  const removeFromBasket = (id) => () => {
    dispatch({ type: "removeFromBasket", payload: { id } });
  };

  return { basket, addToBasket, removeFromBasket };
}
