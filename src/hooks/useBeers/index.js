import { useQuery } from "react-query";
import queryString from "query-string";
import cMyBeerFetch from "../../cMyBeerFetch";

export default function useBeers({ categoryId } = {}) {
  const beersUrl = queryString.stringifyUrl({
    url: "/beers",
    query: { categoryId },
  });

  const { isLoading, error, data } = useQuery(
    ["beers", categoryId],
    cMyBeerFetch(beersUrl)
  );

  return { isLoading, error, beers: data };
}
