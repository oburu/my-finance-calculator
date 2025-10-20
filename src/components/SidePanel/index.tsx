import CloseIcon from "@mui/icons-material/Close";
import { Box, Drawer, IconButton, Typography } from "@mui/material";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useVehicleData } from "../../api";

export const SidePanel = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const id = useMemo(() => searchParams.get("id"), [searchParams]);

  const { data: vehicle } = useVehicleData(id ?? "");

  console.log(vehicle);

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
      <Box sx={{ width: { md: 400, xs: "100%" }, p: 3 }}>
        <IconButton
          onClick={handleClose}
          sx={{ position: "absolute", top: 18, right: 18 }}
          aria-label="close sidebar"
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h6">Vehicle Information</Typography>
      </Box>
    </Drawer>
  );
};
