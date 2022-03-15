import React from "react";

export default function useSelect(initialValue = 0) {
  const [value, setValue] = React.useState(initialValue);
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return [value, handleChange];
}
