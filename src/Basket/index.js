import { Image } from "@mui/icons-material";
import {
  Avatar,
  Divider,
  Drawer,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { bool, func } from "prop-types";
import React from "react";
import { List, Title, Total } from "./styles";

export default function Basket({ on = false, toggle = Function.prototype }) {
  return (
    <Drawer anchor="right" open={on} onClose={() => toggle(false)}>
      <Title variant="h4" component="h6">
        Mon panier
      </Title>
      <List sx={{ width: 400 }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Image />
          </ListItemAvatar>
          <ListItemText primary="Brunch this weekend?" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </ListItemAvatar>
          <ListItemText primary="Summer BBQ" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </ListItemAvatar>
          <ListItemText primary="Oui Oui" />
        </ListItem>
      </List>
      <Total>
        <Typography variant="h5" component="h6">
          Total
        </Typography>
        <Typography variant="h5" component="h6">
          12.34€
        </Typography>
      </Total>
    </Drawer>
  );
}

Basket.propTypes = {
  on: bool,
  toggle: func,
};
