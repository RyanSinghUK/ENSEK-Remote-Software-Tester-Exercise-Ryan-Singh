# ENSEK Remote Software Tester Exercise – Ryan Singh

[![Run ENSEK API Tests](https://github.com/RyanSinghUK/ENSEK-Remote-Software-Tester-Exercise-Ryan-Singh/actions/workflows/playwright.yml/badge.svg)](https://github.com/RyanSinghUK/ENSEK-Remote-Software-Tester-Exercise-Ryan-Singh/actions/workflows/playwright.yml)

This repository contains the completed submission for the ENSEK QA Engineer technical test. It is structured into three focused sections, each documented and packaged for review.

---

## 📁 Section 1: Test Plan Creation

A high-level test strategy for the ENSEK Energy Portal web application, covering:

- Project background and purpose
- Scope of testing, risks, and constraints
- Test design approach
- Page-by-page test conditions (Registration, Login, Buy Energy, Sell Energy)

Deliverables:

- `ENSEK Energy Portal Test Plan v1.0.pdf` – Final test plan document

---

## 📁 Section 2: Test Plan Execution

An execution summary of selected UI scenarios covering both happy and unhappy paths. Each test case includes:

- Test steps
- Expected and actual results
- Status (pass/fail)
- Linked defects with structured write-ups

Deliverables:

- `ENSEK - TC001 – Happy Path - Full Inventory Purchase – Gas Energy.pdf` – Happy Path Test Execution with screenshots
- `ENSEK - TC002 – Unhappy Path - Quantity of Units cannot be less than 0 – Electricity Energy.pdf` – Unhappy Path Test Execution with screenshots (Linked Defect)
- `DEF-001 ENSEK Energy Portal (Buy Energy – Electricity) allows purchase of more units than available (Inventory becomes negative).pdf` – Defect Sample Temp late (linked to TC002)
- `DEF-002 ENSEK Energy Portal (Buy Energy) - Promotional Gas discount shows inconsistent values between text and badge.pdf` – Defect Sample Template for UI/Cosmetic issue

---

## 📁 Section 3: REST API Testing

A fully implemented Playwright-based test automation framework designed to validate the REST API exposed by ENSEK. This framework includes:

- Token-based authentication and request context management
- End-to-end validation of core API scenarios:
  - Resetting test data
  - Purchasing all fuel types (Gas, Electric, Oil, Nuclear)
  - Verifying orders are correctly listed
  - Filtering orders created before the current date
  - Validating deletion of specific orders
- Shared utility functions and test data management (e.g. dynamic order ID storage)
- Serial execution strategy for interdependent test flows
- HTML reporting integrated and exported for CI review

Tests can be executed locally or via the GitHub Actions CI pipeline.

Deliverables:

- `playwright-report/` – HTML Test Report
- `tests/api/` – Playwright TypeScript API tests (version-controlled)
