import React from "react";

export default function useQuantity(initialValue = 0) {
  const [quantity, setQuantity] = React.useState(initialValue);
  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

  return [quantity, handleChange];
}
