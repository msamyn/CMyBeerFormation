import { Grid, CircularProgress } from "@mui/material";
import React from "react";

import { useBeers, useSelect } from "../hooks";
import Beer from "../Beer";
import Filter from "../Filter";
import Screen from "../Screen";

export default function HomeScreen() {
  const [value, setValue] = useSelect();
  const { isLoading, beers } = useBeers({
    categoryId: value !== "" ? value : undefined,
  });

  if (isLoading) {
    return (
      <Screen>
        <CircularProgress />
      </Screen>
    );
  }

  return (
    <Screen>
      <Filter value={value} handleChange={setValue} />
      <Grid container spacing={4} justifyContent="space-between">
        {beers.map((beer) => (
          <Grid key={beer.id} item xs={3}>
            <Beer beer={beer} maxQuantity={Math.floor(Math.random() * 10)} />
          </Grid>
        ))}
      </Grid>
    </Screen>
  );
}
