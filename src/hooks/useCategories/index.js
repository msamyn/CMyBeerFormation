import { useQuery } from "react-query";
import cMyBeerFetch from "../../cMyBeerFetch";

export default function useCategories() {
  const { isLoading, error, data } = useQuery(
    "categories",
    cMyBeerFetch("/categories")
  );

  return { isLoading, error, categories: data };
}
