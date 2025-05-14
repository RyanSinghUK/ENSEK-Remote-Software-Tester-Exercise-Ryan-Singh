import { request } from "@playwright/test";

const username = "test";
const password = "testing";

export async function getAuthHeaders(): Promise<Record<string, string>> {
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

  const token = await response.text();
  return {
    Authorization: `Bearer ${token}`,
  };
}
