import { Box } from "./styles";
import { node } from "prop-types";
import Header from "../Header";

export default function Screen({ children }) {
  return (
    <>
      <Header />
      <Box component="main">{children}</Box>
    </>
  );
}

Screen.propTypes = {
  children: node,
};
