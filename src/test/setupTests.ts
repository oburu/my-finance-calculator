import "@testing-library/jest-dom";
import { afterAll, afterEach, beforeAll } from "vitest";

import { setupServer } from "msw/node";
import { handlers } from "./mocks/handlers";

export const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
