import { expect, request, test } from "@playwright/test";

import { getAuthHeaders } from "../../utils/auth";

test("PUT /ENSEK/buy/{id}/{quantity} should purchase units for each energy type", async () => {
  // Get authorization headers
  const headers = await getAuthHeaders();

  // Create a request context using auth
  const context = await request.newContext({ extraHTTPHeaders: headers });

  // Step 1: Get available energy types
  const energyResponse = await context.get("/ENSEK/energy");
  expect(energyResponse.ok()).toBeTruthy();

  const energyData = await energyResponse.json();

  // Step 2: Define how many units to buy for each fuel type
  const purchaseQuantity = 5;

  // Step 3: Iterate over each energy type and send a PUT request to buy units
  for (const [fuel, details] of Object.entries(energyData)) {
    const { energy_id } = details as { energy_id: string };

    const buyResponse = await context.put(
      `/ENSEK/buy/${energy_id}/${purchaseQuantity}`
    );

    // Step 4: Validate each response is successful
    expect(buyResponse.ok()).toBeTruthy();
    expect(buyResponse.status()).toBe(200);

    const result = await buyResponse.text();
    console.log(
      `Purchased ${purchaseQuantity} units of ${fuel} (ID ${energy_id}) → ${result}`
    );
  }
});
