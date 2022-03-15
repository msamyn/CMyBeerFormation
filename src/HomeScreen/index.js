import { Grid, CircularProgress } from "@mui/material";

import Beer from "../Beer";
import Screen from "../Screen";
import React from "react";

import { useBeers } from "../hooks";

export default function HomeScreen() {
  const [beers] = useBeers();

  const hasBeers = beers.length > 0;

  return (
    <Screen>
      {hasBeers > 0 ? (
        <Grid container spacing={4} justifyContent="space-between">
          {beers.map((beer) => (
            <Grid key={beer.id} item xs={3}>
              <Beer beer={beer} maxQuantity={Math.floor(Math.random() * 10)} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </Screen>
  );
}
