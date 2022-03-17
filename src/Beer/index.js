import {
  Badge,
  Card,
  CardContent,
  CardMedia,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { number, string, shape } from "prop-types";
import React from "react";
import { BasketContext } from "../contexts";
import { useQuantity } from "../hooks";
import { CardActions } from "./styles";

export default function Beer({ beer, maxQuantity = 5 }) {
  const [quantity, handleChange] = useQuantity("");
  const { name, description, imageUri, price, id } = beer;
  const { addToBasket, basketItems } = BasketContext.useContext();

  return (
    <Card sx={{ maxWidth: 345 }} component="article">
      <CardMedia component="img" height="140" image={imageUri} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h3">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <FormControl sx={{ width: "100%" }}>
          <Grid container spacing={4}>
            <Grid item xs={8}>
              <InputLabel id="quantity-label">Quantité</InputLabel>
              <Select
                labelId="quantity-label"
                value={quantity}
                label="Quantité"
                onChange={handleChange}
                size="small"
                variant="standard"
                disabled={maxQuantity === 0}
                sx={{ width: "100%" }}
              >
                {new Array(maxQuantity).fill().map((_, i) => (
                  <MenuItem key={i} value={i + 1}>
                    {`${i + 1} - ${((i + 1) * Number(price)).toFixed(2)}€`}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={4}>
              <IconButton
                size="large"
                aria-label="4 products in cart"
                color="inherit"
                sx={{ background: "lightgray" }}
                onClick={
                  quantity !== ""
                    ? addToBasket(id, quantity)
                    : Function.prototype
                }
              >
                <Badge badgeContent={basketItems[id] ?? 0} color="error">
                  <AddShoppingCartIcon />
                </Badge>
              </IconButton>
            </Grid>
          </Grid>
        </FormControl>
      </CardActions>
    </Card>
  );
}

Beer.propTypes = {
  maxQuantity: number,
  beer: shape({
    id: string,
    name: string,
    price: string,
    description: string,
    imageUri: string,
  }),
};
