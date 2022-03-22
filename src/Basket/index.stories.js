import { ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import Basket from ".";
import { BasketContext } from "../contexts";

import theme from "../ds/theme";
import { sbDomain } from "../testUtils";

export default {
  title: sbDomain("Basket"),
  component: Basket,
};

const queryClient = new QueryClient();

export const Open = () => (
  <QueryClientProvider client={queryClient}>
    <BasketContext.Provider>
      <ThemeProvider theme={theme}>
        <Basket on />
      </ThemeProvider>
    </BasketContext.Provider>
  </QueryClientProvider>
);
