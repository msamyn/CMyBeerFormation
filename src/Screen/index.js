import { string, node, bool } from "prop-types";

import { Title, Subtitle } from "./styles";

export default function Screen({ title, navigation, isHome = false }) {
  return (
    <>
      <Title>CMyBeer</Title>
      <Subtitle isHome={isHome}>{title}</Subtitle>
      <nav>{navigation}</nav>
    </>
  );
}

Screen.propTypes = {
  title: string.isRequired,
  navigation: node,
  isHome: bool,
};
