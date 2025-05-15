# ENSEK Remote Software Tester Exercise – Ryan Singh

A complete QA automation framework and test documentation pack submitted for the ENSEK Remote Software Tester technical evaluation.

✅ Continuous Integration

All REST API tests are automatically executed on-demand via GitHub Actions.

[![Run ENSEK API Tests](https://github.com/RyanSinghUK/ENSEK-Remote-Software-Tester-Exercise-Ryan-Singh/actions/workflows/playwright.yml/badge.svg)](https://github.com/RyanSinghUK/ENSEK-Remote-Software-Tester-Exercise-Ryan-Singh/actions/workflows/playwright.yml)

To trigger a test run manually, use the **"Run workflow"** button on the Actions tab.

---

This repository contains the completed submission for the ENSEK QA Engineer technical test. It is structured into three focused sections, each documented and packaged for review.

---

## 📁 Section 1: Test Plan Creation

A high-level test strategy for the ENSEK Energy Portal web app, outlining:

- Background and objectives
- Test scope, risks, and constraints
- Page-level test conditions: Registration, Login, Buy Energy, Sell Energy

Deliverables:

- `ENSEK Energy Portal Test Plan v1.0.pdf` – Final test plan document

---

## 📁 Section 2: Test Plan Execution

Executed UI scenarios highlighting both happy and unhappy paths, with linked defects and annotated screenshots.

Deliverables:

- `ENSEK - TC001 – Happy Path - Full Inventory Purchase – Gas Energy.pdf` – Happy path test with screenshots
- `ENSEK - TC002 – Unhappy Path - Quantity of Units cannot be less than 0 – Electricity Energy.pdf` – Failing scenario (with linked defect)
- `DEF-001 ENSEK Energy Portal (Buy Energy – Electricity) allows purchase of more units than available (Inventory becomes negative).pdf` – Linked defect report
- `DEF-002 ENSEK Energy Portal (Buy Energy) - Promotional Gas discount shows inconsistent values between text and badge.pdf` – UI defect example

---

## 📁 Section 3: REST API Testing

A robust, Playwright-based test automation suite for validating ENSEK’s public REST API.

Includes:

- Token-based authentication and reusable request context
- Smoke test to confirm API availability and validate response structure from `/ENSEK/energy`
- Reset test data
- Purchase energy units across all fuel types (Gas, Electric, Oil, Nuclear)
- Verify orders are correctly listed
- Filter orders created before current date
- Validate deletion of a specific order (known to return 500 error)
- Assert correct handling of unauthorized token attempts
- Dynamic order ID storage and JSON data handling
- Serial execution to preserve test isolation
- HTML reporting for CI visibility

Deliverables:

- `playwright-report/` – HTML Test Report
- `tests/api/` – Playwright TypeScript API tests (version-controlled)

---

## 🚀 How to Run Locally

```bash
npm install
npm run test:ordered
```

---

## 🧰 Tech Stack

- [Playwright](https://playwright.dev/) for API testing
- TypeScript
- GitHub Actions for CI

---

## ⚠ Known Issues

- The `/ENSEK/orders/{orderId}` DELETE endpoint consistently returns HTTP 500 — documented as part of validation tests
