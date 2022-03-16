import { number } from "prop-types";
import formatCurrency from "../formatCurrency";

export default function Price({ value }) {
  if (value <= 0) return "";

  return formatCurrency(value);
}

Price.protoTypes = {
  value: number,
};
