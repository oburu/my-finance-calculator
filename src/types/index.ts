export type Vehicle = {
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  colour: string;
  id: string;
  image: string;
};

export type SortField = "price" | "year" | "mileage";
export type SortDirection = "asc" | "desc";
