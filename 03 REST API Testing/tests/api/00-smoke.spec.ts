import { expect, request, test } from "@playwright/test";

test("API base URL returns a valid energy catalog", async ({ baseURL }) => {
  const context = await request.newContext();
  const response = await context.get(`${baseURL}/ENSEK/energy`);

  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

  const body = await response.json();

  // Validate all energy types exist
  expect(body).toHaveProperty("gas");
  expect(body).toHaveProperty("electric");
  expect(body).toHaveProperty("nuclear");
  expect(body).toHaveProperty("oil");

  // Spot check some key fields
  expect(typeof body.gas.price_per_unit).toBe("number");
  expect(typeof body.nuclear.quantity_of_units).toBe("number");
  expect(body.oil.quantity_of_units).toBeGreaterThanOrEqual(0);
});
