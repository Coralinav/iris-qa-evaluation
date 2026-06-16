# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: frontend\tests\ui-regression.spec.ts >> Iris Sciences - Frontend (UI) Regression Suite >> DIR-002 - Reports page PDF export should trigger a file download
- Location: frontend\tests\ui-regression.spec.ts:87:7

# Error details

```
Error: locator.click: Unexpected token "=" while parsing css selector "button:has-text("Export PDF"), a:has-text("Export PDF"), text=Export PDF". Did you mean to CSS.escape it?
Call log:
  - waiting for button:has-text("Export PDF"), a:has-text("Export PDF"), text=Export PDF >> nth=0

```

# Page snapshot

```yaml
- generic [ref=e2]: "{\"detail\":\"Not Found\"}"
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
  32  |     expect(download).not.toBeNull();
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
> 92  |     await pdfButton.click();
      |                     ^ Error: locator.click: Unexpected token "=" while parsing css selector "button:has-text("Export PDF"), a:has-text("Export PDF"), text=Export PDF". Did you mean to CSS.escape it?
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