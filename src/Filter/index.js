import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useCategories } from "../hooks";
import { func, string } from "prop-types";

export default function Filter({ value, handleChange }) {
  const { isLoading, categories } = useCategories();

  return (
    <FormControl sx={{ width: 400, marginBottom: 3 }}>
      <InputLabel id="filter-label">Catégorie</InputLabel>
      <Select
        labelId="filter-label"
        value={value}
        label="Catégorie"
        onChange={handleChange}
        disabled={isLoading}
      >
        {categories?.map(({ id, name }, i) => (
          <MenuItem key={id} value={id}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

Filter.propTypes = {
  category: string,
  handleChange: func,
};
