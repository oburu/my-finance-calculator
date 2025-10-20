import { CssBaseline, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { describe, expect, test } from "vitest";
import App from "./App";
import { theme } from "./theme";

function renderWithClient(ui: React.ReactElement) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
    },
  });

  return render(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ui} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

describe("App", () => {
  test("Fetches the Vehicles data", async () => {
    renderWithClient(<App />);

    expect(screen.getByText("Loading ⌛...")).toBeInTheDocument();

    await waitFor(async () => {
      expect(
        screen.getByText("🚙 My Finance Calculator 📝")
      ).toBeInTheDocument();
      expect(screen.getByText("Honda Civic")).toBeInTheDocument();
    });
  });

  test("Click on a Vehicle Card", async () => {
    renderWithClient(<App />);

    await waitFor(() => {
      expect(screen.getByText("Honda Civic")).toBeInTheDocument();
    });

    const vehicleCard = screen.getAllByTestId("vehicle-card");

    fireEvent.click(vehicleCard[0]);
    await waitFor(() => {
      expect(
        screen.getByText("Representative Finance Calculator")
      ).toBeInTheDocument();
    });

    fireEvent.click(screen.getByTestId("close-button"));
    await waitFor(() => {
      expect(
        screen.getByText("🚙 My Finance Calculator 📝")
      ).toBeInTheDocument();
    });
  });
});
