import { number, string } from "prop-types";
import formatCurrency from "../formatCurrency";
import Price from "../Price";

export default function BasketItemPrice({ price, quantity }) {
  return (
    <>
      <strong>
        <Price value={Number(price)} />
      </strong>{" "}
      x {quantity} = {formatCurrency(price * quantity)}
    </>
  );
}

export const types = {
  price: string,
  quantity: number,
};

BasketItemPrice.propTypes = types;
