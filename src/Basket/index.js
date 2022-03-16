import { Drawer, Typography } from "@mui/material";

import { bool, func } from "prop-types";
import React from "react";
import BasketItem from "../BasketItem";

import { useBeers } from "../hooks";
import Price from "../Price";
import { List, Title, Total } from "./styles";

const sumPrice = (subTotal, { quantity, price }) => subTotal + price * quantity;

export default function Basket({ on = false, toggle = Function.prototype }) {
  const [basket, dispatch] = React.useReducer(Function.prototype, {
    lFHjKe: 1,
    VvFIVD: 3000,
    pbMPZm: 109,
  });

  const { isLoading, beers } = useBeers();

  const beersInBasket = isLoading
    ? []
    : beers
        ?.filter(({ id }) => Object.keys(basket).includes(id))
        .map((beer) => ({ ...beer, quantity: basket[beer.id] }));

  const basketTotalAmount = beersInBasket.reduce(sumPrice, 0);

  return (
    <Drawer anchor="right" open={on} onClose={() => toggle(false)}>
      <Title variant="h4" component="h6">
        Mon panier
      </Title>
      <List sx={{ width: 400 }}>
        {beersInBasket?.map((beer, i) => (
          <BasketItem
            key={beer.id}
            {...beer}
            divider={i !== beersInBasket.length - 1}
          />
        ))}
      </List>
      <Total>
        <Typography variant="h5" component="h6">
          Total
        </Typography>
        <Typography variant="h5" component="h6">
          <Price value={basketTotalAmount} />
        </Typography>
      </Total>
    </Drawer>
  );
}

Basket.propTypes = {
  on: bool,
  toggle: func,
};
