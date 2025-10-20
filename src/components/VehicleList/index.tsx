import { Box, Grid } from "@mui/material";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";

import { useVehicles } from "../../api";
import { VehicleCard } from "../VehicleCard";

export const VehicleList = () => {
  const { data: vehicles, isLoading, isError } = useVehicles();

  const table = useReactTable({
    data: vehicles ?? [],
    columns: [],
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) return <Box>Loading Table ⌛...</Box>;

  if (isError && !isLoading)
    return <Box>Sorry there is an error with the connection ⚠️</Box>;

  return (
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
  );
};
