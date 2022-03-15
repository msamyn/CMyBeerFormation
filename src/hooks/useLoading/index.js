import React from "react";
export default function useLoading(initialState = false) {
  const [isLoading, setLoading] = React.useState(initialState);
  return [isLoading, setLoading];
}
