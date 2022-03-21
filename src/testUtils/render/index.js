import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BasketContext } from "../../contexts";
import { render as rtlRender } from "@testing-library/react";

export default function render(chidren) {
  const queryClient = new QueryClient();
  return rtlRender(
    <QueryClientProvider client={queryClient}>
      <BasketContext.Provider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={chidren} />
          </Routes>
        </BrowserRouter>
      </BasketContext.Provider>
    </QueryClientProvider>
  );
}
