import { object } from "prop-types";

export default function BeerMinitature({ beer }) {
  return (
    <>
      <div>Name : {beer.name}</div>
      <div>Price : {beer.price}</div>
    </>
  );
}

BeerMinitature.propTypes = {
  beer: object.isRequired,
};
