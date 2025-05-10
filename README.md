# ENSEK QA Engineer Technical Test Submission

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

A strategy for how API endpoints would be tested given the API was inaccessible. This section includes:

- Gherkin-style test definitions
- Assumptions about endpoints
- Expected responses and validation criteria
- Mock Postman collection with placeholder endpoints

Deliverables:

- `03 REST API Testing.pdf` – Automation Test Strategy, including mocked request and response payloads

---

## Notes

- Only `.pdf` files and the required assets are tracked in this repository. Source `.docx` files are excluded via `.gitignore` to reduce noise.
- All work was completed independently and submitted in accordance with the provided brief.
