# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: frontend\tests\ui-regression.spec.ts >> Iris Sciences - Frontend (UI) Regression Suite >> PS-003 - Public Site Annual Reports link should download/open document
- Location: frontend\tests\ui-regression.spec.ts:28:7

# Error details

```
Error: expect(received).not.toBeNull()

Received: null
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - link "Skip to content" [ref=e4] [cursor=pointer]:
    - /url: "#main"
  - banner [ref=e5]:
    - generic [ref=e6]:
      - link "iris SCIENCES" [ref=e7] [cursor=pointer]:
        - /url: /
        - generic [ref=e8]:
          - img [ref=e9]
          - generic [ref=e20]:
            - generic [ref=e21]: iris
            - generic [ref=e22]: SCIENCES
      - navigation [ref=e23]:
        - link "Heritage" [ref=e24] [cursor=pointer]:
          - /url: /heritage
        - link "Reports" [ref=e25] [cursor=pointer]:
          - /url: /reports
        - link "Staff login" [ref=e26] [cursor=pointer]:
          - /url: /login
  - main [ref=e27]:
    - generic [ref=e28]:
      - paragraph [ref=e29]: Reports
      - heading "Annual reports" [level=1] [ref=e30]
      - paragraph [ref=e31]: Audited annual reports are available for download.
      - list [ref=e33]:
        - listitem [ref=e34]:
          - link "2025 2025 Annual Report Annual" [ref=e35] [cursor=pointer]:
            - /url: /reports
            - generic [ref=e36]:
              - generic [ref=e37]: "2025"
              - paragraph [ref=e38]: 2025 Annual Report
              - generic [ref=e39]: Annual
        - listitem [ref=e41]:
          - link "2024 2024 Annual Report Annual" [ref=e42] [cursor=pointer]:
            - /url: /reports
            - generic [ref=e43]:
              - generic [ref=e44]: "2024"
              - paragraph [ref=e45]: 2024 Annual Report
              - generic [ref=e46]: Annual
        - listitem [ref=e48]:
          - link "2023 2023 Annual Report Annual" [ref=e49] [cursor=pointer]:
            - /url: /reports
            - generic [ref=e50]:
              - generic [ref=e51]: "2023"
              - paragraph [ref=e52]: 2023 Annual Report
              - generic [ref=e53]: Annual
        - listitem [ref=e55]:
          - link "2022 2022 Annual Report Annual" [ref=e56] [cursor=pointer]:
            - /url: /reports
            - generic [ref=e57]:
              - generic [ref=e58]: "2022"
              - paragraph [ref=e59]: 2022 Annual Report
              - generic [ref=e60]: Annual
        - listitem [ref=e62]:
          - link "2021 2021 Annual Report Annual" [ref=e63] [cursor=pointer]:
            - /url: /reports
            - generic [ref=e64]:
              - generic [ref=e65]: "2021"
              - paragraph [ref=e66]: 2021 Annual Report
              - generic [ref=e67]: Annual
        - listitem [ref=e69]:
          - link "2020 2020 Annual Report Annual" [ref=e70] [cursor=pointer]:
            - /url: /reports
            - generic [ref=e71]:
              - generic [ref=e72]: "2020"
              - paragraph [ref=e73]: 2020 Annual Report
              - generic [ref=e74]: Annual
        - listitem [ref=e76]:
          - link "2019 2019 Annual Report Annual" [ref=e77] [cursor=pointer]:
            - /url: /reports
            - generic [ref=e78]:
              - generic [ref=e79]: "2019"
              - paragraph [ref=e80]: 2019 Annual Report
              - generic [ref=e81]: Annual
        - listitem [ref=e83]:
          - link "2018 2018 Annual Report Annual" [ref=e84] [cursor=pointer]:
            - /url: /reports
            - generic [ref=e85]:
              - generic [ref=e86]: "2018"
              - paragraph [ref=e87]: 2018 Annual Report
              - generic [ref=e88]: Annual
  - contentinfo [ref=e90]:
    - generic [ref=e91]:
      - generic [ref=e92]:
        - generic [ref=e93]:
          - img [ref=e94]
          - generic [ref=e105]:
            - text: Iris Sciences
            - text: Wing
            - img "delta" [ref=e106]: Δ
            - text: Research Facility
        - generic [ref=e107]:
          - paragraph [ref=e108]: About
          - list [ref=e109]:
            - listitem [ref=e110]:
              - link "Our Heritage" [ref=e111] [cursor=pointer]:
                - /url: /heritage
        - generic [ref=e112]:
          - paragraph [ref=e113]: Reports
          - list [ref=e114]:
            - listitem [ref=e115]:
              - link "Annual Reports" [ref=e116] [cursor=pointer]:
                - /url: /reports
        - generic [ref=e117]:
          - paragraph [ref=e118]: Press
          - list [ref=e119]:
            - listitem [ref=e120]:
              - link "press@iris-sciences.example" [ref=e121] [cursor=pointer]:
                - /url: mailto:press@iris-sciences.example
      - paragraph [ref=e123]: Subject welfare is monitored continuously and reviewed each quarter.
      - generic [ref=e124]:
        - paragraph [ref=e125]: © 2024 Iris Sciences. All rights reserved.
        - link "Operations Portal →" [ref=e126] [cursor=pointer]:
          - /url: /login
```

# Test source

```ts
  1   | import { test, expect } from '../fixtures/uiFixtures';
  2   | import { TEST_CONSTANTS } from '../../data/testData';
  3   | 
  4   | test.describe('Iris Sciences - Frontend (UI) Regression Suite', () => {
  5   | 
  6   |   test.beforeEach(async ({ page, loginPage }) => {
  7   |     await loginPage.navigate(TEST_CONSTANTS.BASE_URL);
  8   |     if (TEST_CONSTANTS.CASE_TOKEN) {
  9   |       await page.evaluate((token) => {
  10  |         localStorage.setItem('case_token', token);
  11  |       }, TEST_CONSTANTS.CASE_TOKEN);
  12  |       await page.reload();
  13  |     }
  14  |   });
  15  | 
  16  |   // --- PUBLIC SITE TESTS ---
  17  |   test('PS-001 & PS-002 - Public Site navigation links should not return 404', async ({ page, publicSitePage }) => {
  18  |     await publicSitePage.clickAllPrograms();
  19  |     await expect(page).not.toHaveURL(/.*404/);
  20  |     await expect(page.locator('text=Not Found')).not.toBeVisible();
  21  | 
  22  |     await publicSitePage.navigate(TEST_CONSTANTS.BASE_URL);
  23  |     await publicSitePage.clickAllSubjects();
  24  |     await expect(page).not.toHaveURL(/.*404/);
  25  |     await expect(page.locator('text=Not Found')).not.toBeVisible();
  26  |   });
  27  | 
  28  |   test('PS-003 - Public Site Annual Reports link should download/open document', async ({ page, publicSitePage }) => {
  29  |     const reportPromise = page.waitForEvent('download', { timeout: 3000 }).catch(() => null);
  30  |     await publicSitePage.clickFirstAnnualReport();
  31  |     const download = await reportPromise;
> 32  |     expect(download).not.toBeNull();
      |                          ^ Error: expect(received).not.toBeNull()
  33  |   });
  34  | 
  35  |   // --- TEST SUBJECT UI TESTS ---
  36  |   test('TS-001 - Test Subject Dashboard should not display Approve/Reject buttons', async ({ loginAs, dashboardPage }) => {
  37  |     await loginAs('Test Subject');
  38  |     const approveCount = await dashboardPage.getApproveButtonsCount();
  39  |     const rejectCount = await dashboardPage.getRejectButtonsCount();
  40  |     expect(approveCount).toBe(0);
  41  |     expect(rejectCount).toBe(0);
  42  |   });
  43  | 
  44  |   test('TS-002 - Test Subject can open subject details panel', async ({ loginAs, dashboardPage, subjectsPage }) => {
  45  |     await loginAs('Test Subject');
  46  |     await dashboardPage.navigateToTab('Subjects');
  47  |     await subjectsPage.selectSubjectRow(TEST_CONSTANTS.SUBJECT_IDS.SUBJECT_0001);
  48  |     await expect(subjectsPage.subjectDetailPanelPlaceholder).not.toBeVisible();
  49  |   });
  50  | 
  51  |   test('TS-004 - Test Subject session creation wizard should block progress on empty fields', async ({ page, loginAs, dashboardPage, sessionsPage }) => {
  52  |     await loginAs('Test Subject');
  53  |     await dashboardPage.navigateToTab('Sessions');
  54  |     await sessionsPage.startWizard();
  55  |     await sessionsPage.clickNext();
  56  |     expect(await page.locator('text=required').isVisible() || await sessionsPage.subjectDropdown.isVisible()).toBe(true);
  57  |   });
  58  | 
  59  |   test('TS-006 - Test Subject should be restricted from accessing the Approvals view', async ({ page, loginAs }) => {
  60  |     await loginAs('Test Subject');
  61  |     await page.goto(`${TEST_CONSTANTS.BASE_URL}/admin/approvals`);
  62  |     await expect(page).not.toHaveURL(/.*\/admin\/approvals/);
  63  |   });
  64  | 
  65  |   // --- JUNIOR COORDINATOR UI TESTS ---
  66  |   test('JTC-001 - Junior Coordinator Dashboard should not display Approve/Reject buttons', async ({ loginAs, dashboardPage }) => {
  67  |     await loginAs('Junior Test Coordinator');
  68  |     const approveCount = await dashboardPage.getApproveButtonsCount();
  69  |     const rejectCount = await dashboardPage.getRejectButtonsCount();
  70  |     expect(approveCount).toBe(0);
  71  |     expect(rejectCount).toBe(0);
  72  |   });
  73  | 
  74  |   test('JTC-002 - Junior Coordinator can open subject details panel', async ({ loginAs, dashboardPage, subjectsPage }) => {
  75  |     await loginAs('Junior Test Coordinator');
  76  |     await dashboardPage.navigateToTab('Subjects');
  77  |     await subjectsPage.selectSubjectRow(TEST_CONSTANTS.SUBJECT_IDS.SUBJECT_0002);
  78  |     await expect(subjectsPage.subjectDetailPanelPlaceholder).not.toBeVisible();
  79  |   });
  80  |   // --- DIRECTOR OF ENRICHMENT UI TESTS ---
  81  |   test('DIR-001 - Methodology page should not display unresolved formula variables', async ({ page, loginAs }) => {
  82  |     await loginAs('Director of Enrichment');
  83  |     await page.goto(`${TEST_CONSTANTS.BASE_URL}/admin/methodology`);
  84  |     await expect(page.locator('text=???')).not.toBeVisible();
  85  |   });
  86  | 
  87  |   test('DIR-002 - Reports page PDF export should trigger a file download', async ({ page, loginAs }) => {
  88  |     await loginAs('Director of Enrichment');
  89  |     await page.goto(`${TEST_CONSTANTS.BASE_URL}/admin/reports`);
  90  |     const downloadPromise = page.waitForEvent('download', { timeout: 3000 }).catch(() => null);
  91  |     const pdfButton = page.locator('button:has-text("Export PDF"), a:has-text("Export PDF"), text=Export PDF').first();
  92  |     await pdfButton.click();
  93  |     const download = await downloadPromise;
  94  |     expect(download).not.toBeNull();
  95  |   });
  96  | 
  97  |   test('DIR-003 - Legacy sessions should be filtered or excluded from active Sessions view', async ({ page, loginAs }) => {
  98  |     await loginAs('Director of Enrichment');
  99  |     await page.goto(`${TEST_CONSTANTS.BASE_URL}/admin/sessions`);
  100 |     await expect(page.locator('text=SES-IFR-71-Q3-001')).not.toBeVisible();
  101 |   });
  102 | 
  103 |   test('DIR-004 - Dashboard Approve button should trigger an API call and status update', async ({ page, loginAs }) => {
  104 |     await loginAs('Director of Enrichment');
  105 |     const requestPromise = page.waitForRequest(req => 
  106 |       req.url().includes('/api/admin/sessions/') && req.url().endsWith('/approve') && req.method() === 'POST',
  107 |       { timeout: 3000 }
  108 |     ).catch(() => null);
  109 |     const approveButton = page.locator('button:has-text("Approve")').first();
  110 |     await approveButton.click();
  111 |     const request = await requestPromise;
  112 |     expect(request).not.toBeNull();
  113 |   });
  114 | 
  115 | });
  116 | 
```