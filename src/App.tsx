import { Box, Typography } from "@mui/material";
import { VehicleList } from "./components/VehicleList";

function App() {
  return (
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
        <VehicleList />
      </Box>
    </Box>
  );
}

export default App;
