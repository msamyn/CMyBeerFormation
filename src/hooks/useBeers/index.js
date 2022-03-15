import { useQuery } from "react-query";
import cMyBeerFetch from "../../cMyBeerFetch";

export default function useBeers() {
  const { isLoading, error, data } = useQuery("beers", cMyBeerFetch("/beers"));

  return { isLoading, error, beers: data };
}
