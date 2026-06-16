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

### 2. Configure Environment Variables
Create a `.env` file in the root of the project by copying the example file:
```bash
cp .env.example .env
```
Open the `.env` file and fill in the required credentials and tokens:
* `BASE_URL`: The base URL of the target environment (default: `https://iris.revelarautomation.com`)
* `CASE_TOKEN`: Your unique evaluation Case Token.
* `TEST_SUBJECT_PASSWORD`: Password for the Test Subject role.
* `JUNIOR_COORDINATOR_PASSWORD`: Password for the Junior Coordinator role.
* `DIRECTOR_PASSWORD`: Password for the Director role.

*Note: The `.env` file is excluded from git tracking to keep credentials secure.*

### 3. Running the Tests

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
## Environment Variables

Create a `.env` file in the project root:

```env
BASE_URL=<application_url>
CASE_TOKEN=<case_token>

TEST_SUBJECT_PASSWORD=<password>
JUNIOR_PASSWORD=<password>
DIRECTOR_PASSWORD=<password>
```

The values are intentionally excluded from source control for security reasons.

## Installation

```bash
npm install
```

## Run Tests

```bash
npx playwright test
```

## Notes

This project was developed against a private evaluation environment. Credentials and access tokens are not included in the repository.
```