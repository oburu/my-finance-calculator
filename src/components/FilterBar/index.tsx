import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  type SortDirection,
} from "@mui/material";
import type { SortField } from "../../types";

type FiltersProps = {
  search: string;
  setSearch: (value: string) => void;
  sortField: SortField;
  setSortField: (value: SortField) => void;
  sortDirection: SortDirection;
  handleSortDirection: (value: SortDirection) => void;
};
export const FilterBar = ({
  search,
  setSearch,
  sortField,
  setSortField,
  sortDirection,
  handleSortDirection,
}: FiltersProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        mb: 3,
        alignItems: "center",
      }}
    >
      <TextField
        label="Search by make or model"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ flex: 1, minWidth: 220 }}
      />

      <FormControl sx={{ minWidth: 150 }}>
        <InputLabel>Sort By</InputLabel>
        <Select
          value={sortField}
          label="Sort By"
          onChange={(e) => setSortField(e.target.value)}
        >
          <MenuItem value="price">Price</MenuItem>
          <MenuItem value="year">Year</MenuItem>
          <MenuItem value="mileage">Mileage</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ minWidth: 150 }}>
        <InputLabel>Direction</InputLabel>
        <Select
          value={sortDirection}
          label="Direction"
          onChange={(e) => handleSortDirection(e.target.value as SortDirection)}
        >
          <MenuItem value="asc">Ascending</MenuItem>
          <MenuItem value="desc">Descending</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
