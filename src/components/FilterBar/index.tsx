import { Box, MenuItem, Select, TextField } from "@mui/material";
import { useAppContext } from "../../context/useAppContext";
import { DropDown } from "./DropDown";

export const FilterBar = () => {
  const {
    search,
    setSearch,
    sortField,
    setSortField,
    sortDirection,
    handleSortDirection,
  } = useAppContext();

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
      <DropDown label="Sort By">
        <Select
          value={sortField}
          label="Sort By"
          onChange={(e) => setSortField(e.target.value)}
        >
          <MenuItem value="price">Price</MenuItem>
          <MenuItem value="year">Year</MenuItem>
          <MenuItem value="mileage">Mileage</MenuItem>
        </Select>
      </DropDown>
      <DropDown label="Direction">
        <Select
          value={sortDirection}
          label="Direction"
          onChange={() => handleSortDirection()}
        >
          <MenuItem value="asc">Ascending</MenuItem>
          <MenuItem value="desc">Descending</MenuItem>
        </Select>
      </DropDown>
    </Box>
  );
};
