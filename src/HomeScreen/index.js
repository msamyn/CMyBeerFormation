import { Grid } from "@mui/material";
import Beer from "../Beer";
import Screen from "../Screen";

export default function HomeScreen() {
  const beers = new Array(20).fill(null).map((_, i) => ({
    id: i,
    name: `beer ${i}`,
    price: 10.5,
    image:
      "https://brewerydb-images.s3.amazonaws.com/beer/vxzuxc/upload_5kPh7z-contentAwareMedium.png",
  }));

  return (
    <Screen>
      <Grid container spacing={4} justifyContent="space-between">
        {beers.map((beer) => (
          <Grid key={beer.id} item xs={3}>
            <Beer beer={beer} />
          </Grid>
        ))}
      </Grid>
    </Screen>
  );
}
