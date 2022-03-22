import { Typography, List as MuiList, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Title = styled(Typography)({
  margin: "1rem",
});

export const List = styled(MuiList)({
  width: 400,
});

export const Total = styled(Box)(({ theme }) => ({
  margin: "1rem",
  backgroundColor: theme.palette.grey[600],

  borderRadius: theme.spacing(1),
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "1rem",
}));
