import { Box } from "./styles";
import { node } from "prop-types";
import Header from "../Header";
import Basket from "../Basket";
import { useToggle } from "react-use";

export default function Screen({ children }) {
  const [on, toggle] = useToggle();
  return (
    <>
      <Header onToggleBasket={toggle} />
      <Basket on={on} toggle={toggle} />
      <Box component="main">{children}</Box>
    </>
  );
}

Screen.propTypes = {
  children: node,
};
