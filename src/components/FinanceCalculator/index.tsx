import { Card, CardContent, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import type { FinanceQuote } from "../../types";
import { Results } from "./Results";
import { Sliders } from "./Sliders";

const FinanceCalculator = ({ vehiclePrice }: { vehiclePrice: number }) => {
  const [depositPercent, setDepositPercent] = useState<number>(10); // 10% default
  const [term, setTerm] = useState<number>(60); // 60 months default

  const quote: FinanceQuote = useMemo(() => {
    const totalDeposit = vehiclePrice * (depositPercent / 100);
    const totalAmountOfCredit = vehiclePrice - totalDeposit;
    const monthlyPayment = totalAmountOfCredit / term;

    return {
      onTheRoadPrice: vehiclePrice,
      totalDeposit,
      totalAmountOfCredit,
      numberOfMonthlyPayments: term,
      monthlyPayment,
    };
  }, [vehiclePrice, depositPercent, term]);

  return (
    <Card
      sx={{
        maxWidth: 500,
        mx: "auto",
        mt: 3,
        p: 2,
        borderRadius: 3,
        boxShadow: 4,
      }}
    >
      <CardContent>
        <Typography fontWeight="bold" mb={2}>
          Representative Finance Calculator
        </Typography>
        <Sliders
          depositPercent={depositPercent}
          setDepositPercent={setDepositPercent}
          term={term}
          setTerm={setTerm}
          quote={quote}
        />
        <Results quote={quote} />
      </CardContent>
    </Card>
  );
};

export default FinanceCalculator;
