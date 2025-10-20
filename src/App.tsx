import { Box, Typography } from "@mui/material";
import { useVehicles } from "./api";
import { FilterBar } from "./components/FilterBar";
import { SidePanel } from "./components/SidePanel";
import { VehicleList } from "./components/VehicleList";
import { AppContextProvider } from "./context/AppContextProvider";

function App() {
  const { data, isLoading, isError } = useVehicles();

  if (isLoading) return <Box>Loading ⌛...</Box>;

  if (isError && !isLoading)
    return <Box>Sorry there is an error with the connection ⚠️</Box>;

  return (
    <AppContextProvider data={data}>
      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            padding: 4,
            minHeight: "100vh",
            width: { lg: "1240px" },
            margin: { lg: "0 auto" },
          }}
        >
          <Typography variant="h4" mb={2}>
            My Finance Calculator 🚙 📝
          </Typography>
          <FilterBar />
          <VehicleList />
          <SidePanel />
        </Box>
      </Box>
    </AppContextProvider>
  );
}

export default App;
