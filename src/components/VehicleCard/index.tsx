import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import type { Vehicle } from "../../types";

type VehicleCardProps = {
  vehicle: Vehicle;
};
export const VehicleCard = ({ vehicle }: VehicleCardProps) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const selectedId = searchParams.get("id");
  const handleCardClick = (id: string) => {
    navigate(`?id=${id}`);
  };

  const isSelected = vehicle.id === selectedId;
  return (
    <Card
      onClick={() => handleCardClick(vehicle.id)}
      sx={{
        borderRadius: 3,
        backgroundColor: "#fff",
        boxShadow: isSelected ? 6 : 2,
        border: isSelected ? "2px solid #1976d2" : "2px solid white",
        cursor: "pointer",
        transition: "transform 0.2s, box-shadow 0.2s",
        "&:hover": { transform: "scale(1.02)", boxShadow: 4 },
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={vehicle.image}
        alt={`${vehicle.make} ${vehicle.model}`}
      />
      <CardContent>
        <Typography variant="h6" fontWeight="bold">
          {vehicle.make} {vehicle.model}
        </Typography>
        <Typography color="text.secondary">
          {vehicle.year} • {vehicle.colour} • {vehicle.mileage.toLocaleString()}{" "}
          miles
        </Typography>
        <Typography mt={1} variant="h5">
          £{vehicle.price.toLocaleString()}
        </Typography>
      </CardContent>
    </Card>
  );
};
