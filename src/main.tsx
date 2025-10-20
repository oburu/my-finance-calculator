import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const queryCLient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      staleTime: 5000,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryCLient}>
    <App />
  </QueryClientProvider>
);
