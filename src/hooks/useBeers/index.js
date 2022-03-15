import { useQuery } from "react-query";
import beersFetch from "../../beersFetch";

export default function useBeers() {
  // const { isLoading, error, data } = useQuery("beers", () =>
  //   fetch(
  //     "https://my-json-server.typicode.com/msamyn/CMyBeerFormation/beers"
  //   ).then(responseToJson)
  // );

  const { isLoading, error, data } = useQuery("beers", beersFetch("/beers"));

  return { isLoading, error, beers: data };
}
