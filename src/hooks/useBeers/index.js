import React from "react";
import { responseToJson, beersFetch } from "../index";

export default function useBeers(initialState = []) {
  const [beers, setBeers] = React.useState(initialState);

  React.useEffect(() => {
    beersFetch("/beers").then(responseToJson).then(setBeers);
  }, [setBeers]);

  return [beers];
}
