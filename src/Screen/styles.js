import styled from "styled-components";

export const Title = styled.h1`
  color: lightcoral;
`;

export const Subtitle = styled.h2`
  text-decoration: underline;
  color: ${(props) => (props.isHome ? "lightblue" : "lightseagreen")};
`;
