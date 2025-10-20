import { http, HttpResponse } from "msw";
import { mockResponse } from "./mockResponse";

export const handlers = [
  http.get("/vehicles.json", () => {
    return HttpResponse.json(mockResponse);
  }),
];
