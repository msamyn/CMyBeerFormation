import {
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { string, bool } from "prop-types";
import BasketItemPrice, {
  types as basketItemPriceTypes,
} from "../BasketItemPrice";

export default function BasketItem({
  name,
  imageUri,
  quantity,
  price,
  divider = true,
}) {
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
          secondary={<BasketItemPrice price={price} quantity={quantity} />}
        />
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
