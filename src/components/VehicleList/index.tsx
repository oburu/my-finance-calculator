import { Box, Grid } from "@mui/material";
import {
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { useVehicles } from "../../api";
import { useSortingAndFilter } from "../../hooks/useSortingAndFilter";
import { FilterBar } from "../FilterBar";
import { VehicleCard } from "../VehicleCard";

export const VehicleList = () => {
  const { data, isLoading, isError } = useVehicles();

  const filter = useSortingAndFilter({ data: data || [] });

  const table = useReactTable({
    data: filter.sortedData,
    columns: [],
    state: { sorting: filter.sorting },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: filter.setSorting,
  });

  if (isLoading) return <Box>Loading Table ⌛...</Box>;

  if (isError && !isLoading)
    return <Box>Sorry there is an error with the connection ⚠️</Box>;

  return (
    <>
      <FilterBar {...filter} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          mb: 2,
        }}
      />
      <Grid container spacing={3}>
        {table.getRowModel().rows.map((row) => {
          const vehicle = row.original;

          return (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={vehicle.id}>
              <VehicleCard vehicle={vehicle} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
