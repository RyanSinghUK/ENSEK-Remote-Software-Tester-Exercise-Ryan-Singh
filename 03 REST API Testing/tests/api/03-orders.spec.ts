// Test to verify that recently placed energy orders appear in the GET /ENSEK/orders response
import { expect, request, test } from "@playwright/test";

import fs from "fs";
import { getAuthHeaders } from "../../utils/auth";

test("GET /ENSEK/orders should include the recently purchased energy types", async () => {
  // Retrieve Bearer token for authenticated API requests
  const headers = await getAuthHeaders();
  const context = await request.newContext({ extraHTTPHeaders: headers });

  // Fetch the list of all energy orders
  const response = await context.get("/ENSEK/orders");
  expect(response.ok()).toBeTruthy();

  const orders = await response.json();
  //console.log("Returned Orders:", orders);

  // Load the expected order IDs that were saved during the buy scenario
  let expectedOrderIds: string[] = [];
  try {
    expectedOrderIds = JSON.parse(fs.readFileSync("orderIds.json", "utf-8"));
  } catch (err) {
    console.error("❌ Failed to parse orderIds.json:", err.message);
    throw err;
  }
  console.log("Expected Order IDs:", expectedOrderIds);
  console.log(
    "Verifying that expected Order IDs are present in the returned orders..."
  );

  // Check that each expected order ID is present in the returned orders
  for (const id of expectedOrderIds) {
    // Determine if the current expected ID is in the returned orders
    const found = orders.some(
      (order) => (order.id || order.Id)?.toLowerCase() === id.toLowerCase()
    );

    // Log outcome to the console before asserting
    if (found) {
      console.log(`✅ Order ID ${id} was found in the returned orders.`);
    } else {
      console.log(`❌ Order ID ${id} was NOT found in the returned orders.`);
    }

    expect(found).toBe(true);
  }
});
