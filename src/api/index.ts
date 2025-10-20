import { useQuery } from "@tanstack/react-query";
import type { VehicleResponse } from "../types";

export async function fetchVehicles(): Promise<VehicleResponse[]> {
  const res = await fetch("/vehicles.json");
  if (!res.ok) throw new Error("Failed to fetch Vehicles");
  return res.json();
}

export const useVehicles = () =>
  useQuery({
    queryKey: ["absences"],
    queryFn: fetchVehicles,
  });
