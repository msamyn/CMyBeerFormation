import { object } from "prop-types";

export default function Beer({ beer }) {
  return (
    <>
      <div>Name : {beer.name}</div>
      <div>Price : {beer.price}</div>
    </>
  );
}

Beer.propTypes = {
  beer: object.isRequired,
};
