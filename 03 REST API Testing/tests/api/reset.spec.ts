import { expect, request, test } from "@playwright/test";

import { getAuthHeaders } from "../../utils/auth";

test("POST /ENSEK/reset should reset all energy data", async () => {
  // Get auth token header using the shared login utility
  const headers = await getAuthHeaders();

  // Create a new request context using the token
  const context = await request.newContext({
    extraHTTPHeaders: headers,
  });

  // Call the /reset endpoint to clear all prior state
  const response = await context.post("/ENSEK/reset");

  // Validate that the request succeeded
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
});
