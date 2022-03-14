import {
  AppBar,
  Badge,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import { ShoppingBasket } from "@mui/icons-material";

import { Link } from "./styles";

export default function Header() {
  const mainNavigation = [
    { path: "/", name: "Les bières" },
    { path: "/countdown", name: "Countdown" },
  ];

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
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
          >
            <Badge badgeContent={4} color="error">
              <ShoppingBasket />
            </Badge>
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
