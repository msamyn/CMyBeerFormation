import {
  Avatar,
  Divider,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { string, bool } from "prop-types";
import BasketItemPrice, {
  types as basketItemPriceTypes,
} from "../BasketItemPrice";

import { Delete } from "@mui/icons-material";
import { BasketContext } from "../contexts";

export default function BasketItem({
  name,
  imageUri,
  quantity,
  price,
  divider = true,
  id,
}) {
  const { removeFromBasket } = BasketContext.useContext();
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            src={imageUri}
            alt={name}
            sx={{ height: "30px", width: "30px" }}
          />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <BasketItemPrice price={price} quantity={Number(quantity)} />
          }
        />
        <IconButton
          size="large"
          aria-label="4 products in cart"
          color="inherit"
          onClick={removeFromBasket(id)}
        >
          <Delete />
        </IconButton>
      </ListItem>

      {divider && <Divider variant="inset" component="li" />}
    </>
  );
}

BasketItem.propTypes = {
  name: string,
  imageUri: string,
  divider: bool,
  ...basketItemPriceTypes,
};
