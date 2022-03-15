import { Grid, CircularProgress } from "@mui/material";
import Beer from "../Beer";
import beersFetch from "../lib/beersFetch";
import responseToJson from "../lib/responseToJson";
import Screen from "../Screen";
import React from "react";

export default function HomeScreen() {
  const [beers, setBeers] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    beersFetch("/beers")
      .then(responseToJson)
      .then(setBeers)
      .then(() => setLoading(false));
  }, [setBeers]);

  return (
    <Screen>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={4} justifyContent="space-between">
          {beers.map((beer) => (
            <Grid key={beer.id} item xs={3}>
              <Beer beer={beer} maxQuantity={Math.floor(Math.random() * 10)} />
            </Grid>
          ))}
        </Grid>
      )}
    </Screen>
  );
}
