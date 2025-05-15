import { expect, test } from "@playwright/test";

// This test verifies that the /ENSEK/reset endpoint correctly rejects requests with an invalid bearer token.
// If the endpoint mistakenly accepts the invalid token, it could indicate a security vulnerability.

test.describe("[API] POST /ENSEK/reset with invalid token", () => {
  test("should return 401 Unauthorized", async ({ request }) => {
    // Send a POST request to /ENSEK/reset with an obviously invalid bearer token
    const response = await request.post("/ENSEK/reset", {
      headers: {
        Authorization: "Bearer invalid.token.value",
      },
    });

    const actualStatus = response.status();
    console.log("Received status:", actualStatus);

    // If a 200 OK is received, flag this as a security concern in the console
    if (actualStatus === 200) {
      console.warn(
        "❌ /ENSEK/reset accepted an invalid token and returned 200 OK."
      );
    }

    // Assert that the response status is 401 Unauthorized
    expect(actualStatus).toBe(401);
  });
});
