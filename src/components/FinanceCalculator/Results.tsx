import { Stack, Typography } from "@mui/material";
import type { FinanceQuote } from "../../types";

export const Results = ({ quote }: { quote: FinanceQuote }) => {
  return (
    <Stack spacing={1.5} sx={{ mt: 3 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5">Price</Typography>
        <Typography variant="h5">
          £{quote.onTheRoadPrice.toLocaleString()}
        </Typography>
      </Stack>

      <Stack direction="row" justifyContent="space-between">
        <Typography variant="body1">Total Deposit</Typography>
        <Typography variant="body1" fontWeight="bold">
          £
          {quote.totalDeposit.toLocaleString(undefined, {
            minimumFractionDigits: 2,
          })}
        </Typography>
      </Stack>

      <Stack direction="row" justifyContent="space-between">
        <Typography variant="body1">Total Amount of Credit</Typography>
        <Typography variant="body1" fontWeight="bold">
          £
          {quote.totalAmountOfCredit.toLocaleString(undefined, {
            minimumFractionDigits: 2,
          })}
        </Typography>
      </Stack>

      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="body1">Monthly Payment</Typography>
        <Typography variant="h6" color="primary" fontWeight="bold">
          £{quote.monthlyPayment.toFixed(2)}
        </Typography>
      </Stack>
    </Stack>
  );
};
