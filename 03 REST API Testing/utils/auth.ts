import { request } from "@playwright/test";

// Credentials used to authenticate against the ENSEK API
const username = "test";
const password = "testing";

/**
 * Logs into the ENSEK API and retrieves a Bearer token for authenticated requests.
 * Returns the Authorization header to be used in subsequent API calls.
 */
export async function getAuthHeaders(): Promise<Record<string, string>> {
  // Create a new isolated request context for API interaction
  const context = await request.newContext();

  const response = await context.post(
    "https://qacandidatetest.ensek.io/ENSEK/login",
    {
      data: { username, password },
    }
  );

  if (!response.ok()) {
    throw new Error(
      `Login failed: ${response.status()} - ${response.statusText()}`
    );
  }

  const raw = await response.json();
  console.log("LOGIN RESPONSE:", raw);
  const token = raw.access_token;
  console.log("HEADER:", {
    Authorization: `Bearer ${token}`,
  });

  // Return header object formatted for use in authenticated API requests
  return {
    Authorization: `Bearer ${token}`,
  };
}
