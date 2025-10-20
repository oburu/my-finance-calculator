import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";
import type { Vehicle } from "../../types";

type SmallVehicleCardProps = {
  vehicle: Vehicle;
};

export const SmallVehicleCard: React.FC<SmallVehicleCardProps> = ({
  vehicle,
}) => {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        mt: 2,
        pt: 2,
        pl: 2,
        borderRadius: 0,
        boxShadow: 0,
      }}
    >
      <Avatar
        src={vehicle.image}
        alt={`${vehicle.make} ${vehicle.model}`}
        sx={{ width: 80, height: 80, mr: 2 }}
      />

      <Box sx={{ flex: 1 }}>
        <Typography variant="h5" fontWeight="bold">
          {vehicle.make} {vehicle.model}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {vehicle.year} • {vehicle.colour} • {vehicle.mileage.toLocaleString()}{" "}
          miles
        </Typography>
      </Box>
    </Stack>
  );
};
