import CloseIcon from "@mui/icons-material/Close";
import { Box, Drawer, IconButton } from "@mui/material";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useVehicleData } from "../../api";
import FinanceCalculator from "../FinanceCalculator";
import { SmallVehicleCard } from "../VehicleCard/SmallVehicleCard";

export const SidePanel = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const id = useMemo(() => searchParams.get("id"), [searchParams]);

  const { data: vehicle } = useVehicleData(id ?? "");

  const handleClose = () => {
    searchParams.delete("id");
    setSearchParams(searchParams);
  };

  const isOpen = useMemo(() => Boolean(id), [id]);

  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={handleClose}
      aria-hidden="false"
    >
      <Box sx={{ width: { md: 500, xs: "100%" }, p: 3 }}>
        <IconButton
          onClick={handleClose}
          sx={{ position: "absolute", top: 18, right: 18 }}
          aria-label="close sidebar"
          data-testid="close-button"
        >
          <CloseIcon />
        </IconButton>

        {vehicle && (
          <>
            <SmallVehicleCard vehicle={vehicle} />
            <FinanceCalculator vehiclePrice={vehicle.price} />
          </>
        )}
      </Box>
    </Drawer>
  );
};
