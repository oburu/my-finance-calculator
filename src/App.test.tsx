import { ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { http, HttpResponse } from "msw";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, test, vi } from "vitest";
import App from "./App";
import { useAppContext } from "./context/useAppContext";
import { server } from "./test/setupTests";
import { theme } from "./theme";

function renderWithClient(ui: React.ReactElement, initialEntries?: string[]) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
    },
  });

  return render(
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={initialEntries}>
          <Routes>
            <Route path="/" element={ui} />
          </Routes>
        </MemoryRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

const TestComponent = () => {
  const value = useAppContext();
  return <div>{value.search}</div>;
};

const errorExpect = () => {
  expect(
    screen.getByText("Sorry there is an error with the connection ⚠️")
  ).toBeInTheDocument();
};

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

  test("Click on a Vehicle Card and shows the side panel and the deposit slider works", async () => {
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

    const depositSlider = screen.getByRole("slider", { name: /deposit/i });
    expect(depositSlider).toHaveAttribute("aria-valuenow", "10");
    fireEvent.change(depositSlider, { target: { value: 70 } });
    expect(depositSlider).toHaveAttribute("aria-valuenow", "70");

    fireEvent.click(screen.getByTestId("close-button"));
    await waitFor(() => {
      expect(
        screen.getByText("🚙 My Finance Calculator 📝")
      ).toBeInTheDocument();
    });
  });

  test("Search for a vehicle", async () => {
    renderWithClient(<App />);

    await waitFor(() => {
      expect(screen.getByText("Tesla Model 3")).toBeInTheDocument();
    });

    const input = screen.getByLabelText(
      /Search by make or model/i
    ) as HTMLInputElement;

    fireEvent.change(input, { target: { value: "honda" } });

    expect(input.value).toBe("honda");

    await waitFor(() => {
      expect(screen.getByText("Honda Civic")).toBeInTheDocument();
    });
  });

  test("Shows error message when there's no data response for the table", async () => {
    server.use(
      http.get("/vehicles.json", () => new HttpResponse(null, { status: 404 }))
    );
    renderWithClient(<App />);
    await waitFor(errorExpect);
  });

  test("Shows error message when there's no vehicle id", async () => {
    renderWithClient(<App />, ["/?id=veh090"]);

    await waitFor(() => {
      expect(
        screen.getByText("Vehicle does not exists ⚠️")
      ).toBeInTheDocument();
    });
  });

  test("throws when used outside provider", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});

    expect(() => render(<TestComponent />)).toThrow(
      "useAppContext must be used within a AppContextProvider"
    );

    spy.mockRestore();
  });
});
