import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { number, string, shape } from "prop-types";
import React from "react";
import { useQuantity } from "../hooks";

export default function Beer({ beer, maxQuantity = 5 }) {
  const [quantity, handleChange] = useQuantity(0);
  const { name, description, imageUri, price } = beer;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={imageUri} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <FormControl>
          <InputLabel id="quantity-label">Quantité</InputLabel>
          <Select
            labelId="quantity-label"
            value={quantity}
            label="Quantité"
            onChange={handleChange}
            size="small"
            variant="standard"
          >
            {new Array(maxQuantity + 1).fill().map((_, i) => (
              <MenuItem key={i} value={i}>
                {i !== 0
                  ? `${i} - ${(i * Number(price)).toFixed(2)}€`
                  : "Aucune"}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button size="small">🛒</Button>
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
