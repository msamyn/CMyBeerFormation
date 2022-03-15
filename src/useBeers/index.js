import React from "react";
import beersFetch from "../lib/beersFetch";
import responseToJson from "../lib/responseToJson";

export default function useBeers(initialState = []) {
  const [beers, setBeers] = React.useState(initialState);

  React.useEffect(() => {
    beersFetch("/beers").then(responseToJson).then(setBeers);
  }, [setBeers]);

  return [beers];
}
