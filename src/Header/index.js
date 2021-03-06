import {
  AppBar,
  Badge,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import { func } from "prop-types";
import { ShoppingBasket } from "@mui/icons-material";
import { Link } from "./styles";
import { BasketContext } from "../contexts";

export default function Header({ onToggleBasket = Function.prototype }) {
  const { basketItemsCount } = BasketContext.useContext();

  const mainNavigation = [
    { path: "/", name: "Les bières" },
    { path: "/countdown", name: "Countdown" },
  ];

  return (
    <AppBar position="sticky">
      <Container maxWidth="false">
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="h1">
            🍻 CMyBeer
          </Typography>
          <Box sx={{ display: "flex", marginLeft: "20px" }}>
            {mainNavigation.map(({ name, path }) => (
              <Link key={path} to={path}>
                {name}
              </Link>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            size="large"
            aria-label="4 products in cart"
            color="inherit"
            onClick={onToggleBasket}
          >
            <Badge badgeContent={basketItemsCount} color="error">
              <ShoppingBasket />
            </Badge>
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

Header.propTypes = {
  onToggleBasket: func,
};
