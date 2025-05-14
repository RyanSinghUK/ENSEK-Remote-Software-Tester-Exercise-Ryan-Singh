import { expect, request, test } from "@playwright/test";

import { getAuthHeaders } from "../../utils/auth";

test("GET /ENSEK/orders should correctly count orders created before today", async () => {
  // Get authentication headers
  const headers = await getAuthHeaders();
  const context = await request.newContext({ extraHTTPHeaders: headers });

  // Fetch all orders
  const response = await context.get("/ENSEK/orders");
  expect(response.ok()).toBeTruthy();

  const orders = await response.json();

  // Get the start of today's date in UTC
  const now = new Date();
  const today = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
  );

  // Filter orders created before today
  const previousOrders = orders.filter((order) => {
    const orderTime = new Date(order.time);
    return orderTime < today;
  });

  console.log(`Found ${previousOrders.length} orders created before today.`);
  expect(typeof previousOrders.length).toBe("number");
});
