import { Drawer, Typography } from "@mui/material";
import { bool, func } from "prop-types";
import React from "react";
import BasketItem from "../BasketItem";
import { BasketContext } from "../contexts";
import Price from "../Price";
import { List, Title, Total } from "./styles";

export default function Basket({ on = false, toggle = Function.prototype }) {
  const { basketItemsTotalAmount, basketItems } = BasketContext.useContext();

  return (
    <Drawer anchor="right" open={on} onClose={() => toggle(false)}>
      <Title variant="h4" component="h6">
        Mon panier
      </Title>
      <List sx={{ width: 400 }}>
        {basketItems?.map((beer, i) => (
          <BasketItem
            key={beer.id}
            {...beer}
            divider={i !== basketItems.length - 1}
          />
        ))}
      </List>
      <Total>
        <Typography variant="h5" component="h6">
          Total
        </Typography>
        <Typography variant="h5" component="h6">
          <Price value={basketItemsTotalAmount} />
        </Typography>
      </Total>
    </Drawer>
  );
}

Basket.propTypes = {
  on: bool,
  toggle: func,
};
