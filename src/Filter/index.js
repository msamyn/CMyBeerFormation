import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useCategories, useSelect } from "../hooks";

export default function Filter() {
  const [value, handleChange] = useSelect("");
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
