# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: frontend\tests\ui-regression.spec.ts >> Iris Sciences - Frontend (UI) Regression Suite >> TS-001 - Test Subject Dashboard should not display Approve/Reject buttons
- Location: frontend\tests\ui-regression.spec.ts:36:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 0
Received: 4
```

# Page snapshot

```yaml
- generic [ref=e4]:
  - link "Skip to content" [ref=e5] [cursor=pointer]:
    - /url: "#admin-main"
  - navigation [ref=e6]:
    - generic [ref=e8]:
      - img [ref=e9]
      - generic [ref=e20]:
        - generic [ref=e21]: iris
        - generic [ref=e22]: SCIENCES
    - navigation "Admin sections" [ref=e23]:
      - link "Dashboard" [ref=e24] [cursor=pointer]:
        - /url: /admin
      - link "Subjects" [ref=e25] [cursor=pointer]:
        - /url: /admin/subjects
      - link "Chambers" [ref=e26] [cursor=pointer]:
        - /url: /admin/chambers
      - link "Sessions" [ref=e27] [cursor=pointer]:
        - /url: /admin/sessions
      - link "Approvals" [ref=e28] [cursor=pointer]:
        - /url: /admin/approvals
      - link "Apparatus" [ref=e29] [cursor=pointer]:
        - /url: /admin/apparatus
      - link "Reports" [ref=e30] [cursor=pointer]:
        - /url: /admin/reports
      - link "Audit" [ref=e31] [cursor=pointer]:
        - /url: /admin/audit
  - generic [ref=e32]:
    - complementary [ref=e34]:
      - paragraph [ref=e35]: Welcome back. Things are tracking within methodological tolerance.
      - button "Dismiss banner" [ref=e36] [cursor=pointer]: ✕
    - banner [ref=e37]:
      - searchbox "Search admin records" [ref=e38]
      - link "Public site →" [ref=e40] [cursor=pointer]:
        - /url: /
    - main [ref=e41]:
      - generic [ref=e43]:
        - paragraph [ref=e44]: Operations
        - heading "Dashboard" [level=2] [ref=e45]
      - generic [ref=e46]:
        - generic [ref=e47]:
          - generic [ref=e48]:
            - generic [ref=e49]: Subjects enrolled
            - img [ref=e51]
          - generic [ref=e53]: "81"
          - generic [ref=e55]:
            - generic [ref=e56]: ▲
            - text: 3 legacy exclusions applied
        - generic [ref=e57]:
          - generic [ref=e58]:
            - generic [ref=e59]: Sessions in QE roll-up
            - img [ref=e61]
          - generic [ref=e63]: "0"
          - generic [ref=e65]:
            - generic [ref=e66]: ▲
            - text: cutoff 1971-09-14
        - generic [ref=e67]:
          - generic [ref=e69]: Open incidents
          - generic [ref=e70]: "20"
          - generic [ref=e72]: legacy multiplier ×0.40
        - generic [ref=e74]:
          - generic [ref=e76]: Chambers online
          - generic [ref=e77]: "12"
          - generic [ref=e79]:
            - generic [ref=e80]: ▲
            - text: operational fleet
        - generic [ref=e81]:
          - generic [ref=e83]: Pending approvals
          - generic [ref=e84]: "4"
          - generic [ref=e86]:
            - generic [ref=e87]: ▲
            - text: awaiting review
      - generic [ref=e89]:
        - button "Quarterly Enrichment Index (canonical) 0.0%" [ref=e90] [cursor=pointer]:
          - generic [ref=e91]:
            - generic [ref=e92]: Quarterly Enrichment Index (canonical)
            - generic [ref=e93]: 0.0%
          - generic [ref=e94]: ›
        - generic [ref=e96]:
          - paragraph [ref=e97]: Canonical figure computed from enrolled subjects, legacy chamber multiplier, and Q4 cutoff. Excludes the legacy exclusion list.
          - paragraph [ref=e98]:
            - text: "vs Home: 87.4% (displayed) —"
            - generic [ref=e99]: mismatch
      - generic [ref=e101]:
        - generic [ref=e102]:
          - heading "Pending approvals" [level=2] [ref=e105]
          - generic [ref=e106]:
            - generic [ref=e107]:
              - generic [ref=e108]:
                - paragraph [ref=e109]: Approve session SES-2039 S-0016
                - paragraph [ref=e110]: requested by
              - button "Approve Approve session SES-2039 for subject S-0016" [ref=e111] [cursor=pointer]: Approve
              - button "Reject Approve session SES-2039 for subject S-0016" [ref=e112] [cursor=pointer]: Reject
            - generic [ref=e113]:
              - generic [ref=e114]:
                - paragraph [ref=e115]: Approve session SES-2001 S-0005
                - paragraph [ref=e116]: requested by
              - button "Approve Approve session SES-2001 for subject S-0005" [ref=e117] [cursor=pointer]: Approve
              - button "Reject Approve session SES-2001 for subject S-0005" [ref=e118] [cursor=pointer]: Reject
            - generic [ref=e119]:
              - generic [ref=e120]:
                - paragraph [ref=e121]: Approve session SES-2008 S-0073
                - paragraph [ref=e122]: requested by
              - button "Approve Approve session SES-2008 for subject S-0073" [ref=e123] [cursor=pointer]: Approve
              - button "Reject Approve session SES-2008 for subject S-0073" [ref=e124] [cursor=pointer]: Reject
            - generic [ref=e125]:
              - generic [ref=e126]:
                - paragraph [ref=e127]: Approve session SES-2017 S-0079
                - paragraph [ref=e128]: requested by
              - button "Approve Approve session SES-2017 for subject S-0079" [ref=e129] [cursor=pointer]: Approve
              - button "Reject Approve session SES-2017 for subject S-0079" [ref=e130] [cursor=pointer]: Reject
        - generic [ref=e131]:
          - heading "Recent activity" [level=2] [ref=e134]
          - generic [ref=e135]:
            - generic [ref=e136]:
              - generic [ref=e138]: 2026-04-25 06:00
              - generic [ref=e139]: Vogel
              - generic [ref=e140]: containment auto-engaged
              - generic [ref=e141]: session S-0002
            - generic [ref=e142]:
              - generic [ref=e144]: 2026-04-25 06:00
              - generic [ref=e145]: system
              - generic [ref=e146]: rejected session
              - generic [ref=e147]: session S-0046
            - generic [ref=e148]:
              - generic [ref=e150]: 2026-04-24 06:00
              - generic [ref=e151]: Dr. Aaltonen
              - generic [ref=e152]: containment auto-engaged
              - generic [ref=e153]: subject S-0034
            - generic [ref=e154]:
              - generic [ref=e156]: 2026-04-20 06:00
              - generic [ref=e157]: Dr. Aaltonen
              - generic [ref=e158]: approved session
              - generic [ref=e159]: subject S-0080
            - generic [ref=e160]:
              - generic [ref=e162]: 2026-04-14 06:00
              - generic [ref=e163]: system
              - generic [ref=e164]: containment auto-engaged
              - generic [ref=e165]: chamber S-0063
            - generic [ref=e166]:
              - generic [ref=e168]: 2026-04-10 06:00
              - generic [ref=e169]: system
              - generic [ref=e170]: containment auto-engaged
              - generic [ref=e171]: apparatus S-0015
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
> 40  |     expect(approveCount).toBe(0);
      |                          ^ Error: expect(received).toBe(expected) // Object.is equality
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