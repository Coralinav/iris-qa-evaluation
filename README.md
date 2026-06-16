# Iris Sciences - Automated QA Regression Suite

This repository contains the automated End-to-End (E2E) UI and API regression suite for the Iris Sciences Operational Console. It is built using **Playwright** and **TypeScript**, following the **Page Object Model (POM)** design pattern.

---

## Project Structure

The project separates frontend (UI) and backend (API) test scopes:

```text
iris-qa-evaluation/
 data/
    testData.ts              # Unified test credentials, URLs, and token constants
 frontend/
    fixtures/
       uiFixtures.ts        # Custom fixtures and page setups for UI tests
    pages/
       LoginPage.ts         # POM - Login Page actions and assertions
       DashboardPage.ts     # POM - Admin Dashboard actions
       SubjectsPage.ts      # POM - Subjects Directory actions
       SessionsPage.ts      # POM - Experiments Session actions
       PublicSitePage.ts    # POM - Public Home Site actions
    selectors/               # Centralized CSS/Text locators for all pages
       LoginPageSelectors.ts
       DashboardPageSelectors.ts
       SubjectsPageSelectors.ts
       SessionsPageSelectors.ts
       PublicSitePageSelectors.ts
    tests/
        ui-regression.spec.ts # E2E Frontend UI Test Cases
 backend/
    fixtures/
       apiFixtures.ts       # Setup helpers and authenticated contexts for API calls
    tests/
        api-regression.spec.ts # Backend API Regression Test Cases
 playwright.config.ts         # Playwright test execution configurations
 tsconfig.json                # TypeScript project specifications
```

---

## Getting Started

### Prerequisites
* **Node.js** (v18 or higher recommended)

### 1. Install Dependencies
Navigate to the project directory and run:
```bash
npm install
```

### 2. Running the Tests

You can run the tests using either **NPM scripts** (shortcuts) or **native Playwright CLI commands** (flexible options):

#### Option A: Using NPM Scripts
* **Run All Tests:**
  ```bash
  npm test
  ```
* **Run Frontend (UI) Suite Only:**
  ```bash
  npm run test:fe
  ```
* **Run Backend (API) Suite Only:**
  ```bash
  npm run test:be
  ```

#### Option B: Using Playwright CLI
* **Run Frontend (UI) Suite:**
  ```bash
  npx playwright test --project=frontend
  ```
* **Run Backend (API) Suite:**
  ```bash
  npx playwright test --project=backend
  ```
* **Run a Specific Test Case (e.g., TS-001):**
  ```bash
  npx playwright test --grep "TS-001"
  ```
* **Run with UI Mode (Interactive runner):**
  ```bash
  npx playwright test --ui
  ```
* **Run in Headed Mode (Visual browser execution):**
  ```bash
  npx playwright test --headed
  ```

---

## Viewing Test Reports

Playwright includes a built-in interactive HTML report highlighting test steps, execution durations, logs, and screenshots of any failed tests.

1. Run any test suite (e.g. `npm run test:fe`).
2. Open the HTML report in your default web browser:
   ```bash
   npx playwright show-report
   ```
