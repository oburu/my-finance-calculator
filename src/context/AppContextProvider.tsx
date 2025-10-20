import type { SortingState } from "@tanstack/react-table";
import { type ReactNode, useMemo, useState } from "react";
import type { SortDirection, SortField, Vehicle } from "../types";
import { AppContext } from "./useAppContext";

export const AppContextProvider = ({
  data,
  children,
}: {
  data?: Vehicle[];
  children: ReactNode;
}) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState<SortField>("price");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  const handleSortDirection = () => {
    setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const filteredData = useMemo(() => {
    if (!data) return [];
    return data.filter(
      (v) =>
        v.make.toLowerCase().includes(search.toLowerCase()) ||
        v.model.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, data]);

  const sortedData = useMemo(() => {
    const sorted = [...filteredData].sort((a, b) => {
      const valueA = a[sortField];
      const valueB = b[sortField];
      if (valueA < valueB) return sortDirection === "asc" ? -1 : 1;
      if (valueA > valueB) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
    return sorted;
  }, [filteredData, sortField, sortDirection]);

  const value = {
    sortedData,
    sorting,
    setSorting,
    search,
    setSearch,
    sortField,
    setSortField,
    sortDirection,
    handleSortDirection,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
