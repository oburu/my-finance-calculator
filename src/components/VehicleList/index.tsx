import { Grid } from "@mui/material";
import {
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { useAppContext } from "../../context/useAppContext";
import { VehicleCard } from "../VehicleCard";

export const VehicleList = () => {
  const { sortedData, sorting, setSorting } = useAppContext();

  const table = useReactTable({
    data: sortedData,
    columns: [],
    state: { sorting: sorting },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
  });

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
