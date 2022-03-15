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
import { number, string } from "prop-types";
import React from "react";
import useQuantity from "../useQuantity";

export default function Beer({ id, name, image, price, maxQuantity = 5 }) {
  const [quantity, handleChange] = useQuantity(0);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={image} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Abner (1867-1953) is our great grandfather; Hill Farmstead Brewery
          rests upon the land that was once home to him and his fourteen
          children. In his honor, this Imperial IPA is dutifully crafted from
          American malted barley, a plethora of American hops, our ale yeast and
          water from Abner’s well. It is unfiltered, naturally carbonated, and
          double dry hopped. Aromatic and flowery, bursting with notes of citrus
          and pine, this is the ale that I dream to have shared with Abner.
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
                {i !== 0 ? `${i} - ${(i * price).toFixed(2)}€` : "Aucune"}
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
  name: string,
  image: string,
  price: number,
};
