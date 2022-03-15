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
import { object } from "prop-types";
import React from "react";
import useQuantity from "../useQuantity";

export default function Beer({ beer }) {
  const [quantity, handleChange] = useQuantity(0);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={beer.image}
        alt={beer.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {beer.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <FormControl>
          <InputLabel id="quantity-label">Quantité</InputLabel>
          <Select
            size="small"
            variant="standard"
            labelId="quantity-label"
            value={quantity}
            label="Quantité"
            onChange={handleChange}
          >
            {new Array(6).fill().map((_, i) => (
              <MenuItem key={i} value={i}>
                {i !== 0 ? `${i} - ${(i * beer.price).toFixed(2)}€` : "Aucune"}
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
  beer: object.isRequired,
};
