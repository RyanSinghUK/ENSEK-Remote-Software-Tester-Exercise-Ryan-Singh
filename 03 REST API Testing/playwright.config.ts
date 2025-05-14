import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 30000,
  retries: 0,
  use: {
    baseURL: "https://qacandidatetest.ensek.io",
    extraHTTPHeaders: {
      // Will be dynamically overridden after login
    },
    ignoreHTTPSErrors: true,
  },
  reporter: [["html", { open: "never" }]],
  projects: [
    {
      name: "API",
      testMatch: /.*\.spec\.ts/,
    },
  ],
});
