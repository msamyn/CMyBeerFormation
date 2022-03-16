import { node } from "prop-types";
import React from "react";
import { useBasket, useBeers } from "../../hooks";

const sumPrice = (subTotal, { quantity, price }) => subTotal + price * quantity;
const countItems = (subTotal, { quantity }) => subTotal + quantity;

const BasketContext = React.createContext();

const Provider = ({ children }) => {
  const { basket, addToBasket } = useBasket();

  const { isLoading, beers } = useBeers();

  const basketItems = isLoading
    ? []
    : beers
        ?.filter(({ id }) => Object.keys(basket).includes(id))
        .map((beer) => ({ ...beer, quantity: basket[beer.id] }));

  const basketItemsTotalAmount = basketItems.reduce(sumPrice, 0);
  const basketItemsCount = basketItems.reduce(countItems, 0);

  const value = {
    basketItemsTotalAmount,
    basketItemsCount,
    basketItems,
    addToBasket,
  };

  return (
    <BasketContext.Provider value={value}>{children}</BasketContext.Provider>
  );
};

Provider.propTypes = {
  children: node,
};

function useContext() {
  return React.useContext(BasketContext);
}

const CustomBasketContext = {
  Provider,
  useContext,
};

export default CustomBasketContext;
