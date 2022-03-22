import { ThemeProvider } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "react-query";
import Beer from ".";
import { BasketContext } from "../contexts";

import theme from "../ds/theme";
import { sbDomain } from "../testUtils";

export default {
  title: sbDomain("Beer"),
  component: Beer,
};

export const WithoutData = () => (
  <QueryClientProvider client={new QueryClient()}>
    <BasketContext.Provider>
      <ThemeProvider theme={theme}>
        <Beer />
      </ThemeProvider>
    </BasketContext.Provider>
  </QueryClientProvider>
);

const defaultBeer = {
  id: "1",
  name: "Test",
  description: "Bière de test",
  imageUri: "",
  price: 2.35,
};

export const WithData = () => (
  <QueryClientProvider client={new QueryClient()}>
    <BasketContext.Provider>
      <ThemeProvider theme={theme}>
        <Beer beer={defaultBeer} />
      </ThemeProvider>
    </BasketContext.Provider>
  </QueryClientProvider>
);
