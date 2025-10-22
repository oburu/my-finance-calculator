import type { SortDirection } from "@mui/material";
import type { SortingState } from "@tanstack/react-table";
import { createContext, useContext } from "react";
import type { SortField, Vehicle } from "../types";

type AppContextType = {
  sortedData: Vehicle[];
  sorting: SortingState;
  setSorting: React.Dispatch<React.SetStateAction<SortingState>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  sortField: SortField;
  setSortField: (field: SortField) => void;
  sortDirection: SortDirection;
  handleSortDirection: () => void;
};

export const AppContext = createContext<AppContextType | null>(null);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }
  return context;
};
