import { useQuery } from "@tanstack/react-query";
import type { Vehicle } from "../types";

export async function fetchVehicles(): Promise<Vehicle[]> {
  const res = await fetch("/vehicles.json");
  if (!res.ok) throw new Error("Failed to fetch Vehicles");
  return res.json();
}

export async function fetchVehicleById(id: string): Promise<Vehicle> {
  const allVehicles = await fetchVehicles();
  const vehicle = allVehicles.find((item) => item.id === id);

  if (!vehicle) throw new Error(`Vehicle with ID ${id} not found`);

  await new Promise((resolve) => setTimeout(resolve, 150));

  return vehicle;
}

export const useVehicles = () =>
  useQuery({
    queryKey: ["absences"],
    queryFn: fetchVehicles,
  });

export const useVehicleData = (id: string) =>
  useQuery({
    queryKey: ["vehicle", id],
    queryFn: () => fetchVehicleById(id),
    enabled: Boolean(id),
  });
