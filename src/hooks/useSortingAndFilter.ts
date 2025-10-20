import type { SortingState } from "@tanstack/react-table";
import { useMemo, useState } from "react";
import type { SortDirection, SortField, Vehicle } from "../types";

export const useSortingAndFilter = ({ data }: { data: Vehicle[] }) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState<SortField>("price");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  const handleSortDirection = () => {
    setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const filteredData = useMemo(() => {
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

  return {
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
};
