import { expect, request, test } from "@playwright/test";

import fs from "fs";
import { getAuthHeaders } from "../../utils/auth";

const orderIds: string[] = [];

test("PUT /ENSEK/buy/{id}/{quantity} should purchase units for each energy type", async () => {
  // Get authorization headers
  const headers = await getAuthHeaders();

  // Create a request context using auth
  const context = await request.newContext({ extraHTTPHeaders: headers });

  // Get available energy types
  const energyResponse = await context.get("/ENSEK/energy");
  expect(energyResponse.ok()).toBeTruthy();

  const energyData = await energyResponse.json();

  // Define how many units to buy for each fuel type
  const purchaseQuantity = 5;

  // Iterate over each energy type and send a PUT request to buy units
  for (const [fuel, details] of Object.entries(energyData)) {
    const { energy_id } = details as { energy_id: string };

    const buyResponse = await context.put(
      `/ENSEK/buy/${energy_id}/${purchaseQuantity}`
    );

    // Validate each response is successful
    expect(buyResponse.ok()).toBeTruthy();
    expect(buyResponse.status()).toBe(200);

    const result = await buyResponse.text();
    console.log(
      `Purchased ${purchaseQuantity} units of ${fuel} (ID ${energy_id}) → ${result}`
    );

    const match = result.match(/order(?:\s|\\u00a0)?id(?: is)?[:\s]*([\w-]+)/i);
    if (match) {
      orderIds.push(match[1]);
    }
  }

  // Write once after all iterations
  fs.writeFileSync("orderIds.json", JSON.stringify(orderIds, null, 2));
});
