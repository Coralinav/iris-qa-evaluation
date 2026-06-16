# MANUAL QA AUDIT REPORT

---

## QUARTERLY ENRICHMENT INDEX (QE INDEX) ANALYSIS

The **Quarterly Enrichment Index (QE Index)** is a critical operational KPI representing the weighted average of enrichment efficiency across all active test chambers. During the audit, significant discrepancies were identified in how this index is calculated and displayed across the platform.

### Discrepancy Overview

*   **Public Site Displayed Value:** `87.4%` (Stale / Statically computed with legacy data)
*   **Admin Dashboard API Value:** `0.0%` (Broken due to incorrect backend date filters)
*   **True Calculated Value:** `66.51%` (Dynamically calculated with active 2026 data)

### Technical Root Causes

1. **Incorrect Date Boundary (Backend API):**
   The endpoint `/api/admin/dashboard` returns a `qe_index` of `0` and `sessions_counted: 0`. This is caused by a critical date-filtering bug where the backend dynamically sets the Q4 cutoff date using a hardcoded timestamp from 1971 (`1971-09-14`). Consequently, all current operational data from 2026 is filtered out, leaving the database aggregation query empty.
   
2. **Pollution by Historical Legacy Records (Public Site):**
   The public homepage displays a static `87.4%` because the aggregation includes legacy data from historical test periods. Specifically, it includes session `SES-IFR-71-Q3-001` (from 1971, conducted in chamber `C-Δ-7`), which should be archived and excluded from active quarterly statistics.

### Real QE Index Calculation (Point 2)

By exporting the CSV report, the real QE Index can be calculated by bypassing the system's date boundary bug and applying correct operational constraints.

#### CSV Data & Constraints:
* **Formula:** `QE = Σ(outcome_value × M(chamber) × welfare_coefficient) / Σ(welfare_coefficient)`
* **Exclusions Applied:**
  * Subjects with *voluntary-withdrawal* status (Sessions `SES-2023`, `SES-2028`, `SES-2029`).
  * Sessions in the legacy exclusion list (`SES-IFR-71-Q3-001` and `SES-2018`).
  * **Chamber Weight Modification:** Legacy chamber `C-Δ-7` has an operational weight multiplier of `M = 0.40`. Other active chambers use `M = 1.0`.

#### Mathematical Operation (Active Sessions):
* **SES-2003:** `85.98 × 0.52 = 44.7096`
* **SES-2009:** `68.14 × 0.99 = 67.4586`
* **SES-2010:** `98.64 × 0.97 = 95.6808`
* **SES-2011:** `58.72 × 0.80 = 46.9760`
* **SES-2012:** `52.57 × 0.53 = 27.8621`
* **SES-2020:** `64.97 × 0.78 = 50.6766`
* **SES-2037:** `89.02 × 0.53 = 47.1806`
* **SES-2038:** `19.44 × 0.85 = 16.5240`

* **Sum of Products:** `44.7096 + 67.4586 + 95.6808 + 46.9760 + 27.8621 + 50.6766 + 47.1806 + 16.5240 = 397.0683`
* **Sum of Welfare Coefficients:** `0.52 + 0.99 + 0.97 + 0.80 + 0.53 + 0.78 + 0.53 + 0.85 = 5.97`

#### Result:
* **Real QE Index:** `397.0683 / 5.97 = 66.51%`

---

## 1. PUBLIC SITE

### Frontend (FE) Bugs

#### **PS-001: "All Programs" link returns 404**
*   **Severity:** Medium
*   **Steps:**
    1. Navigate to the Public Site homepage.
    2. Click the **"All Programs"** menu option.
*   **Actual Behavior:** Frontend routing error displays a 404 page.
*   **Expected Behavior:** Correctly route to the Programs catalog page.
*   **Regression Candidate:** YES - Crucial public-facing menu link; routing failures directly harm usability.

#### **PS-002: "All Subjects" link returns 404**
*   **Severity:** Medium
*   **Steps:**
    1. Navigate to the Public Site homepage.
    2. Click the **"All Subjects"** menu option.
*   **Actual Behavior:** Frontend routing error displays a 404 page.
*   **Expected Behavior:** Correctly route to the Subjects directory.
*   **Regression Candidate:** YES - Crucial public-facing menu link; routing failures directly harm usability.

#### **PS-003: Annual Reports cannot be opened**
*   **Severity:** High
*   **Steps:**
    1. Navigate to the Public Reports page.
    2. Click on any annual report link.
*   **Actual Behavior:** No UI action occurs; the link is completely unresponsive.
*   **Expected Behavior:** Open or download the selected PDF report.
*   **Regression Candidate:** YES - Crucial link for public transparency; report access is highly visible.

---

### Backend (BE) Bugs

#### **PS-004: Public QE Index contains legacy data**
*   **Severity:** High
*   **Steps:**
    1. Open the Public Site homepage.
    2. Inspect the headline metric "Quarterly Enrichment Index (QE Index)".
*   **Actual Behavior:** It displays a static `87.4%` because the backend includes legacy records (e.g. `SES-IFR-71-Q3-001` from 1971) in the calculation.
*   **Expected Behavior:** Exclude historical data and calculate the current quarterly index dynamically (yielding `66.51%`).
*   **Regression Candidate:** YES - Directly impacts the accuracy of the primary public-facing KPI (QE Index).

---
---

## 2. TEST SUBJECT

### Frontend (FE) Bugs

#### **TS-001: Approve and Reject buttons visible on dashboard**
*   **Severity:** Medium
*   **Steps:**
    1. Log in as a **Test Subject**.
    2. View the dashboard main panel.
*   **Actual Behavior:** The "Approve" and "Reject" buttons are visible next to pending sessions.
*   **Expected Behavior:** Hide administrative buttons for non-staff roles.
*   **Regression Candidate:** YES - Hiding unauthorized actions prevents user confusion and potential BFLA attempts.

#### **TS-002: Subject detail panel cannot be accessed**
*   **Severity:** High
*   **Steps:**
    1. Log in as a **Test Subject**.
    2. Click the **"Subjects"** tab in the sidebar.
    3. Click on any subject row in the list table.
*   **Actual Behavior:** The UI detail frame does not load or update; it remains blank.
*   **Expected Behavior:** Display the selected subject profile details.
*   **Regression Candidate:** YES - Essential detail-view navigation must be operational for all authorized users.

#### **TS-004: Session creation wizard allows progression without required selections**
*   **Severity:** Medium
*   **Steps:**
    1. Log in as a **Test Subject**.
    2. Open the session creation wizard.
    3. Do not select any Subject, Chamber, or Apparatus.
    4. Click "Next" through each of the wizard steps.
*   **Actual Behavior:** The wizard permits progression to the final step without form validation blocks.
*   **Expected Behavior:** Show validation messages and disable navigation until required fields are filled.
*   **Regression Candidate:** YES - Enforcing wizard state validation prevents invalid session creation requests.

#### **TS-006: Approvals page accessible to Test Subject**
*   **Severity:** High
*   **Steps:**
    1. Log in as a **Test Subject**.
    2. Click the **"Approvals"** tab in the left sidebar menu.
*   **Actual Behavior:** The user is navigated to the Approval queue page.
*   **Expected Behavior:** Hide the menu item and block navigation for unauthorized roles.
*   **Regression Candidate:** YES - Critical navigation restriction to enforce role access control boundaries.

#### **TS-008: Apparatus page accessible to Test Subject**
*   **Severity:** Low
*   **Steps:**
    1. Log in as a **Test Subject**.
    2. Click the **"Apparatus"** tab in the left sidebar menu.
*   **Actual Behavior:** The user is navigated to the Apparatus inventory list.
*   **Expected Behavior:** Restrict access to laboratory inventory according to role matrix guidelines.
*   **Regression Candidate:** NO - Access to inventory views is lower-priority and subject to changing laboratory matrices.

#### **TS-009: Reports export supports CSV only**
*   **Severity:** Low
*   **Steps:**
    1. Log in as a **Test Subject**.
    2. Go to the **Reports** page.
    3. Click the dropdown to export as PDF.
*   **Actual Behavior:** Clicking the PDF option does nothing.
*   **Expected Behavior:** Download report in PDF format.
*   **Regression Candidate:** NO - PDF export format is an optional enhancement; CSV remains fully functional.

---

### Backend (BE) Bugs

#### **TS-003: Subject search does not support official ID format ("S-XXXX")**
*   **Severity:** Medium
*   **Steps:**
    1. Log in as a **Test Subject**.
    2. Navigate to **Subjects**.
    3. Type `S-0002` in the search bar.
*   **Actual Behavior:** The API returns an empty array `[]` because the query logic only parses plain numbers (searching `0002` works).
*   **Expected Behavior:** Parse query input to match prefixes like `S-` or `s-`.
*   **Regression Candidate:** YES - Standard search formats must be supported to avoid user workflow blockers.

#### **TS-005: Session scheduling fails after completing wizard**
*   **Severity:** High
*   **Steps:**
    1. Log in as a **Test Subject**.
    2. Complete the session wizard.
    3. Click the final "Schedule Session" button.
*   **Actual Behavior:** The backend rejects the request with HTTP errors `403 Forbidden` and `422 Unprocessable Content`.
*   **Expected Behavior:** Gracefully deny authorization or block the transaction with a clear error payload.
*   **Regression Candidate:** YES - Resolves high-severity API blocking of core user action (scheduling).

#### **TS-007: Approve and Reject actions fail with 403**
*   **Severity:** High
*   **Steps:**
    1. Log in as a **Test Subject**.
    2. Navigate to **Approvals**.
    3. Click "Approve" or "Reject" on any session.
*   **Actual Behavior:** The API returns `403 Forbidden` error (backend security works, but frontend exposed the control).
*   **Expected Behavior:** Avoid triggering API calls from unauthorized views.
*   **Regression Candidate:** YES - Restricts unauthorized REST calls at the client-side to prevent network waste.

#### **TS-010: Audit severity filters return no results**
*   **Severity:** Medium
*   **Steps:**
    1. Log in as a **Test Subject**.
    2. Navigate to the **Audit** page.
    3. Select any severity level (e.g., `HIGH`) from the dropdown.
*   **Actual Behavior:** The API returns no records, displaying an empty table.
*   **Expected Behavior:** Return logs matching the selected severity level.
*   **Regression Candidate:** YES - Crucial diagnostic filter logic needed for audit log transparency.

#### **TS-011: Broken Function Level Authorization (BFLA) on Dashboard API**
*   **Severity:** Critical
*   **Steps:**
    1. Log in as a **Test Subject** and obtain the session token.
    2. Send a GET request to `/api/admin/dashboard`.
*   **Actual Behavior:** Returns HTTP `200 OK` exposing administrative and operational metrics.
*   **Expected Behavior:** Return `403 Forbidden`.
*   **Regression Candidate:** YES - Critical security regression test to prevent BFLA and protect system metrics.

#### **TS-012: Broken Function Level Authorization (BFLA) on Subjects List API**
*   **Severity:** Critical (Data Privacy Leak)
*   **Steps:**
    1. Log in as a **Test Subject** and obtain the session token.
    2. Send a GET request to `/api/admin/subjects`.
*   **Actual Behavior:** Returns HTTP `200 OK` exposing all subjects in the system.
*   **Expected Behavior:** Return `403 Forbidden`.
*   **Regression Candidate:** YES - Critical security regression test to prevent leakage of all test subjects.

#### **TS-013: Broken Function Level Authorization (BFLA) on Audit Logs API**
*   **Severity:** Critical
*   **Steps:**
    1. Log in as a **Test Subject** and obtain the session token.
    2. Send a GET request to `/api/admin/audit?limit=100&offset=0`.
*   **Actual Behavior:** Returns HTTP `200 OK` exposing all laboratory security logs.
*   **Expected Behavior:** Return `403 Forbidden`.
*   **Regression Candidate:** YES - Critical security regression test to prevent leakage of general audit logs.

#### **TS-014: Broken Function Level Authorization (BFLA) on Roles API**
*   **Severity:** Medium
*   **Steps:**
    1. Log in as a **Test Subject** and obtain the session token.
    2. Send a GET request to `/api/admin/roles`.
*   **Actual Behavior:** Returns HTTP `200 OK` exposing roles schema.
*   **Expected Behavior:** Return `403 Forbidden`.
*   **Regression Candidate:** YES - Critical security regression test to prevent exposure of role schema.

#### **TS-015: Broken Function Level Authorization (BFLA) on Chambers API**
*   **Severity:** High
*   **Steps:**
    1. Log in as a **Test Subject** and obtain the session token.
    2. Send a GET request to `/api/admin/chambers` or `/api/admin/chambers/{chamber_id}`.
*   **Actual Behavior:** Returns HTTP `200 OK` exposing chamber information.
*   **Expected Behavior:** Return `403 Forbidden`.
*   **Regression Candidate:** YES - Critical security regression test to prevent exposure of chambers data.

#### **TS-016: Broken Function Level Authorization (BFLA) on Apparatus API**
*   **Severity:** High
*   **Steps:**
    1. Log in as a **Test Subject** and obtain the session token.
    2. Send a GET request to `/api/admin/apparatus`.
*   **Actual Behavior:** Returns HTTP `200 OK` exposing laboratory apparatus inventory.
*   **Expected Behavior:** Return `403 Forbidden`.
*   **Regression Candidate:** YES - Critical security regression test to prevent exposure of apparatus data.

#### **TS-017: Broken Function Level Authorization (BFLA) on Sessions API**
*   **Severity:** Critical
*   **Steps:**
    1. Log in as a **Test Subject** and obtain the session token.
    2. Send a GET request to `/api/admin/sessions`.
*   **Actual Behavior:** Returns HTTP `200 OK` exposing experiment logs of other subjects.
*   **Expected Behavior:** Return `403 Forbidden`.
*   **Regression Candidate:** YES - Critical security regression test to prevent exposure of experimental logs.

#### **TS-018: Broken Function Level Authorization (BFLA) on Reports Export API**
*   **Severity:** Critical
*   **Steps:**
    1. Log in as a **Test Subject** and obtain the session token.
    2. Send a GET request to `/api/admin/reports/export`.
*   **Actual Behavior:** Returns HTTP `200 OK` exposing reports export utility.
*   **Expected Behavior:** Return `403 Forbidden`.
*   **Regression Candidate:** YES - Critical security regression test to prevent unauthorized report exfiltration.

---
---

## 3. JUNIOR TEST COORDINATOR

### Frontend (FE) Bugs

#### **JTC-001: Dashboard Approve and Reject buttons visible but non-functional**
*   **Severity:** Medium
*   **Steps:**
    1. Log in as a **Junior Test Coordinator**.
    2. View the dashboard main panel.
    3. Click "Approve" or "Reject" next to a session.
*   **Actual Behavior:** Buttons are displayed but do not trigger any action or network request.
*   **Expected Behavior:** Hide or disable approval buttons since the Junior role has no approval authority.
*   **Regression Candidate:** YES - Non-functional action buttons on coordinator dashboard cause user confusion.

#### **JTC-002: Subject detail view inaccessible**
*   **Severity:** High
*   **Steps:**
    1. Log in as a **Junior Test Coordinator**.
    2. Navigate to the **Subjects** tab.
    3. Click on any row in the subjects list.
*   **Actual Behavior:** The details panel does not update or show data.
*   **Expected Behavior:** Load the subject profile card in the right-hand panel.
*   **Regression Candidate:** YES - Essential detail-view navigation must be operational for Junior Coordinators.

#### **JTC-004: Session wizard lacks required-field validation**
*   **Severity:** Medium
*   **Steps:**
    1. Log in as a **Junior Test Coordinator**.
    2. Open the session creation wizard.
    3. Navigate through the screens without selecting data.
*   **Actual Behavior:** Allows proceeding to the final step without form validation warnings.
*   **Expected Behavior:** Enforce required fields at each wizard step.
*   **Regression Candidate:** YES - Enforcing wizard state validation prevents invalid session creation requests.

---

### Backend (BE) Bugs

#### **JTC-003: Subject search fails with standard ID format ("S-XXXX")**
*   **Severity:** Medium
*   **Steps:**
    1. Log in as a **Junior Test Coordinator**.
    2. Navigate to **Subjects**.
    3. Type `S-0002` in the search bar.
*   **Actual Behavior:** Returns an empty list `[]` (duplicate search parser issue).
*   **Expected Behavior:** Search parser matches the full ID prefix.
*   **Regression Candidate:** YES - Standard search formats must be supported to avoid junior workflow blockers.

#### **JTC-005: Session creation returns 403 Forbidden**
*   **Severity:** High
*   **Steps:**
    1. Log in as a **Junior Test Coordinator**.
    2. Complete the session wizard.
    3. Click "Schedule Session".
*   **Actual Behavior:** The backend responds with `403 Forbidden`.
*   **Expected Behavior:** The backend should accept the request and save the session in a "Draft" status.
*   **Regression Candidate:** YES - Resolves blocking API issue where Junior Coordinator cannot draft sessions.

#### **JTC-006: Approval actions fail with 403**
*   **Severity:** Critical
*   **Steps:**
    1. Log in as a **Junior Test Coordinator**.
    2. Send a POST request to `/api/admin/sessions/{id}/approve`.
*   **Actual Behavior:** The backend returns `403 Forbidden`. 
    *(Correct backend restriction, but incorrect UI visibility)*.
*   **Expected Behavior:** Block unauthorized API calls.
*   **Regression Candidate:** YES - Crucial backend restriction validation to prevent unauthorized approvals.

#### **JTC-007: Reject actions fail with 403**
*   **Severity:** Critical
*   **Steps:**
    1. Log in as a **Junior Test Coordinator**.
    2. Send a POST request to `/api/admin/sessions/{id}/reject`.
*   **Actual Behavior:** The backend returns `403 Forbidden`.
*   **Expected Behavior:** Block unauthorized API calls.
*   **Regression Candidate:** YES - Crucial backend restriction validation to prevent unauthorized rejections.

#### **JTC-008: Audit severity filter not functioning**
*   **Severity:** Medium
*   **Steps:**
    1. Log in as a **Junior Test Coordinator**.
    2. Navigate to the **Audit** page.
    3. Select any severity level from the dropdown.
*   **Actual Behavior:** Returns empty records list.
*   **Expected Behavior:** Filter and return log records matching the selected level.
*   **Regression Candidate:** YES - Crucial diagnostic filter logic needed for audit log transparency.

#### **JTC-009: Privilege Escalation: Junior can modify subjects via PATCH**
*   **Severity:** High / Critical Security Vulnerability
*   **Steps:**
    1. Log in as a **Junior Test Coordinator**.
    2. Send a PATCH request to `/api/admin/subjects/S-0001` with a JSON payload updating the name or wing.
*   **Actual Behavior:** The backend processes the update and returns `200 OK`.
*   **Expected Behavior:** Return `403 Forbidden`.
*   **Regression Candidate:** YES - Critical security regression test to prevent unauthorized subject profile updates.

#### **JTC-010: Broken Function Level Authorization (BFLA) on Reports Export API**
*   **Severity:** High
*   **Steps:**
    1. Log in as a **Junior Test Coordinator** and obtain the session token.
    2. Send a GET request to `/api/admin/reports/export`.
*   **Actual Behavior:** Returns HTTP `200 OK` allowing the Junior role to export reports.
*   **Expected Behavior:** Return `403 Forbidden`.
*   **Regression Candidate:** YES - Critical security regression test to prevent unauthorized bulk reports exports.

#### **JTC-011: Broken Function Level Authorization (BFLA) on Audit Logs API**
*   **Severity:** High
*   **Steps:**
    1. Log in as a **Junior Test Coordinator** and obtain the session token.
    2. Send a GET request to `/api/admin/audit?limit=100&offset=0`.
*   **Actual Behavior:** Returns HTTP `200 OK` exposing administrative audit logs.
*   **Expected Behavior:** Return `403 Forbidden`.
*   **Regression Candidate:** YES - Critical security regression test to prevent unauthorized audit logs viewing.

---
---
## 4. DIRECTOR OF ENRICHMENT
### Frontend (FE) Bugs
#### **DIR-001: Methodology page displays unresolved formula variables**
* **Severity:** Medium
* **Steps:**
  1. Log in as a **Director of Enrichment**.
  2. Navigate to **Methodology**.
* **Actual Behavior:** The methodology page displays unresolved placeholders such as `M(legacy) = ???` and `Q4 cutoff = ???`.
* **Expected Behavior:** Display the actual values used by the QE Index calculation engine.
* **Regression Candidate:** YES - Resolves unresolved variables in methodology documentation for admins.
#### **DIR-002: PDF export option is non-functional**
* **Severity:** High
* **Steps:**
  1. Log in as a **Director of Enrichment**.
  2. Navigate to **Reports**.
  3. Select **Export PDF**.
* **Actual Behavior:** No download occurs and no feedback is provided to the user.
* **Expected Behavior:** Generate and download the report in PDF format.
* **Regression Candidate:** YES - Crucial administrative feature; PDF exports must download successfully.
#### **DIR-003: Legacy session exposed in active operational views**
* **Severity:** Medium
* **Steps:**
  1. Log in as a **Director of Enrichment**.
  2. Navigate to **Sessions**.
* **Actual Behavior:** Historical session `SES-IFR-71-Q3-001` from 1971 appears alongside active operational sessions.
* **Expected Behavior:** Legacy records should be archived, filtered, or clearly separated from active operational data.
* **Regression Candidate:** YES - Ensures active operational views remain clean of irrelevant historical data.
#### **DIR-004: Dashboard Approve and Reject buttons are visible but non-functional**
* **Severity:** Medium
* **Steps:**
  1. Log in as a **Director of Enrichment**.
  2. Open the Dashboard.
  3. Locate sessions displaying **Approve** and **Reject** actions.
  4. Click either button.
* **Actual Behavior:** The buttons are visible but do not trigger any action, network request, status update, or user feedback.
* **Expected Behavior:** The buttons should execute the approval/rejection workflow or be disabled if the functionality is unavailable.
* **Regression Candidate:** YES - Resolves non-functional dashboard actions causing administrative confusion.
---
### Backend (BE) Bugs
#### **DIR-005: Dashboard returns QE Index = 0 despite completed observation data**
* **Severity:** Critical
* **Steps:**
  1. Log in as a **Director of Enrichment**.
  2. Open the Dashboard.
  3. Compare dashboard metrics against observation report exports.
* **Actual Behavior:** Dashboard returns:
  * `qe_index = 0`
  * `sessions_counted = 0`
  despite completed sessions and observation reports existing in the system.
* **Expected Behavior:** Dashboard should calculate and display QE Index values using the available observation data.
* **Regression Candidate:** YES - Critical operational bug; dashboard API must correctly aggregate index values.
#### **DIR-006: Historical legacy records included in operational reporting datasets**
* **Severity:** High
* **Steps:**
  1. Export observation reports.
  2. Review the generated dataset.
* **Actual Behavior:** Export includes historical legacy record:
  * `SES-IFR-71-Q3-001`
  * `S-014`
  * `C-Δ-7`
  * `1971-09-01`
* **Expected Behavior:** Historical records should be excluded from current operational reporting or clearly identified as archived data.
* **Regression Candidate:** YES - Ensures exported operational reports are filtered of irrelevant historical data.

---

## METHODOLOGY

### What Was Tested
The audit focused on two primary scopes of the Iris Sciences Operational Console:
1. **Frontend (UI) UX & Routing:** Evaluation of the user journeys of three distinct roles (Test Subject, Junior Test Coordinator, and Director of Enrichment) as well as the public-facing homepage. Critical workflows such as page navigation, PDF/CSV exports, the multi-step session creation wizard, subject details panels, and the visibility of administrative controls like approval/rejection buttons were analyzed manually and programmatically.
2. **Backend (API) Security & Logic:** Comprehensive security assessments targeting Broken Function Level Authorization, privilege escalation via HTTP methods, and database query parameters. The mathematical logic of the Quarterly Enrichment Index (QE Index) endpoints was also analyzed to diagnose why the displayed metrics differed from raw session data.

### How It Was Prioritized
Prioritization of the regression testing and bug tracking followed a risk-based approach combining severity and security implications:
* **Critical (BFLA & Data Exposure):** Endpoints that leaked unauthorized personal data (TS-012, TS-017) or exposed administrative controls (TS-011, JTC-009) were categorized as critical. These were immediately covered by automated API regression tests.
* **High (Core Functional Failures):** Non-functional features impacting operational productivity, such as broken details panels (TS-002, JTC-002) and incorrect dashboard metric aggregations (DIR-005), were flagged as high priority.
* **Medium/Low (Aesthetic & Edge Cases):** Broken hyperlinks on the public homepage (PS-001) or non-standard search format queries (TS-003) were categorized as medium/low priority.
All verified defects that represent core business logic or security boundaries were designated as **Regression Candidates** to ensure that subsequent updates do not reintroduce these flaws.

### What to Do Next (Given More Time)
With additional auditing cycles, the focus would be on the following areas:
1. **Deep Session Lifecycle Validation:** Writing state-machine tests to verify that sessions cannot bypass intermediate states (e.g., scheduling straight to completion without coordinator approval).
2. **Comprehensive Role-Based Access Control (RBAC) Matrix:** Expanding automated coverage to the Senior Test Coordinator role once credentials are recovered, verifying their exact privilege subset.
3. **Database Performance & Query Optimization:** Performing load testing on search queries (`/api/admin/subjects?q=...`) to ensure pagination and indices handle large subject directories efficiently.
4. **Security Penetration Testing:** Inspecting for cross-site scripting (XSS) in session comment fields and SQL injection vulnerabilities on query filters.

---

## DISBURSEMENT NOTICES

No reward disbursement notices were encountered during this engagement.
