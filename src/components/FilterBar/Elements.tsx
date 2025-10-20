import { FormControl, InputLabel } from "@mui/material";
export const DropDown = ({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) => (
  <FormControl sx={{ minWidth: 150 }}>
    <InputLabel>{label}</InputLabel>
    {children}
  </FormControl>
);
