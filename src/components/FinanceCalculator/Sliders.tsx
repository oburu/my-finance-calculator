import { Slider, Typography } from "@mui/material";
import type { FinanceQuote } from "../../types";

type SlidersProps = {
  depositPercent: number;
  setDepositPercent: (val: number) => void;
  term: number;
  setTerm: (val: number) => void;
  quote: FinanceQuote;
};
export const Sliders = ({
  depositPercent,
  setDepositPercent,
  term,
  setTerm,
  quote,
}: SlidersProps) => {
  return (
    <>
      <Typography gutterBottom>
        Deposit: {depositPercent}% (£
        {quote.totalDeposit.toLocaleString(undefined, {
          minimumFractionDigits: 2,
        })}
        )
      </Typography>
      <Slider
        value={depositPercent}
        min={0}
        max={100}
        step={10}
        marks
        valueLabelDisplay="auto"
        onChange={(_, val) => setDepositPercent(val)}
      />

      {/* Term Slider */}
      <Typography gutterBottom>Term (months): {term}</Typography>
      <Slider
        value={term}
        min={0}
        max={72}
        step={6}
        marks
        valueLabelDisplay="auto"
        onChange={(_, val) => {
          if (val === 0) return;
          setTerm(val);
        }}
      />
    </>
  );
};
