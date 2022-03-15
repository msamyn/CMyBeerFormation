import { CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import BasketScreen from "../BasketScreen";
import BeerScreen from "../BeerScreen";
import HomeScreen from "../HomeScreen";
import theme from "./theme";

import CountdownScreen from "../CountdownScreen";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/basket" element={<BasketScreen />} />
          <Route path="/beers/:id" element={<BeerScreen />} />
          <Route path="/countdown" element={<CountdownScreen />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}