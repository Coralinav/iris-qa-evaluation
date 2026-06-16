# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: frontend\tests\ui-regression.spec.ts >> Iris Sciences - Frontend (UI) Regression Suite >> DIR-004 - Dashboard Approve button should trigger an API call and status update
- Location: frontend\tests\ui-regression.spec.ts:103:7

# Error details

```
Error: expect(received).not.toBeNull()

Received: null
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
      - link "Methodology" [ref=e32] [cursor=pointer]:
        - /url: /admin/methodology
  - generic [ref=e33]:
    - complementary [ref=e35]:
      - paragraph [ref=e36]: Welcome back. Things are tracking within methodological tolerance.
      - button "Dismiss banner" [ref=e37] [cursor=pointer]: ✕
    - banner [ref=e38]:
      - searchbox "Search admin records" [ref=e39]
      - link "Public site →" [ref=e41] [cursor=pointer]:
        - /url: /
    - main [ref=e42]:
      - generic [ref=e44]:
        - paragraph [ref=e45]: Operations
        - heading "Dashboard" [level=2] [ref=e46]
      - generic [ref=e47]:
        - generic [ref=e48]:
          - generic [ref=e49]:
            - generic [ref=e50]: Subjects enrolled
            - img [ref=e52]
          - generic [ref=e54]: "81"
          - generic [ref=e56]:
            - generic [ref=e57]: ▲
            - text: 3 legacy exclusions applied
        - generic [ref=e58]:
          - generic [ref=e59]:
            - generic [ref=e60]: Sessions in QE roll-up
            - img [ref=e62]
          - generic [ref=e64]: "0"
          - generic [ref=e66]:
            - generic [ref=e67]: ▲
            - text: cutoff 1971-09-14
        - generic [ref=e68]:
          - generic [ref=e70]: Open incidents
          - generic [ref=e71]: "20"
          - generic [ref=e73]: legacy multiplier ×0.40
        - generic [ref=e75]:
          - generic [ref=e77]: Chambers online
          - generic [ref=e78]: "12"
          - generic [ref=e80]:
            - generic [ref=e81]: ▲
            - text: operational fleet
        - generic [ref=e82]:
          - generic [ref=e84]: Pending approvals
          - generic [ref=e85]: "4"
          - generic [ref=e87]:
            - generic [ref=e88]: ▲
            - text: awaiting review
      - generic [ref=e90]:
        - button "Quarterly Enrichment Index (canonical) 0.0%" [ref=e91] [cursor=pointer]:
          - generic [ref=e92]:
            - generic [ref=e93]: Quarterly Enrichment Index (canonical)
            - generic [ref=e94]: 0.0%
          - generic [ref=e95]: ›
        - generic [ref=e97]:
          - paragraph [ref=e98]: Canonical figure computed from enrolled subjects, legacy chamber multiplier, and Q4 cutoff. Excludes the legacy exclusion list.
          - paragraph [ref=e99]:
            - text: "vs Home: 87.4% (displayed) —"
            - generic [ref=e100]: mismatch
      - generic [ref=e102]:
        - generic [ref=e103]:
          - heading "Pending approvals" [level=2] [ref=e106]
          - generic [ref=e107]:
            - generic [ref=e108]:
              - generic [ref=e109]:
                - paragraph [ref=e110]: Approve session SES-2039 S-0016
                - paragraph [ref=e111]: requested by
              - button "Approve Approve session SES-2039 for subject S-0016" [active] [ref=e112] [cursor=pointer]: Approve
              - button "Reject Approve session SES-2039 for subject S-0016" [ref=e113] [cursor=pointer]: Reject
            - generic [ref=e114]:
              - generic [ref=e115]:
                - paragraph [ref=e116]: Approve session SES-2001 S-0005
                - paragraph [ref=e117]: requested by
              - button "Approve Approve session SES-2001 for subject S-0005" [ref=e118] [cursor=pointer]: Approve
              - button "Reject Approve session SES-2001 for subject S-0005" [ref=e119] [cursor=pointer]: Reject
            - generic [ref=e120]:
              - generic [ref=e121]:
                - paragraph [ref=e122]: Approve session SES-2008 S-0073
                - paragraph [ref=e123]: requested by
              - button "Approve Approve session SES-2008 for subject S-0073" [ref=e124] [cursor=pointer]: Approve
              - button "Reject Approve session SES-2008 for subject S-0073" [ref=e125] [cursor=pointer]: Reject
            - generic [ref=e126]:
              - generic [ref=e127]:
                - paragraph [ref=e128]: Approve session SES-2017 S-0079
                - paragraph [ref=e129]: requested by
              - button "Approve Approve session SES-2017 for subject S-0079" [ref=e130] [cursor=pointer]: Approve
              - button "Reject Approve session SES-2017 for subject S-0079" [ref=e131] [cursor=pointer]: Reject
        - generic [ref=e132]:
          - heading "Recent activity" [level=2] [ref=e135]
          - generic [ref=e136]:
            - generic [ref=e137]:
              - generic [ref=e139]: 2026-04-25 06:00
              - generic [ref=e140]: Vogel
              - generic [ref=e141]: containment auto-engaged
              - generic [ref=e142]: session S-0002
            - generic [ref=e143]:
              - generic [ref=e145]: 2026-04-25 06:00
              - generic [ref=e146]: system
              - generic [ref=e147]: rejected session
              - generic [ref=e148]: session S-0046
            - generic [ref=e149]:
              - generic [ref=e151]: 2026-04-24 06:00
              - generic [ref=e152]: Dr. Aaltonen
              - generic [ref=e153]: containment auto-engaged
              - generic [ref=e154]: subject S-0034
            - generic [ref=e155]:
              - generic [ref=e157]: 2026-04-20 06:00
              - generic [ref=e158]: Dr. Aaltonen
              - generic [ref=e159]: approved session
              - generic [ref=e160]: subject S-0080
            - generic [ref=e161]:
              - generic [ref=e163]: 2026-04-14 06:00
              - generic [ref=e164]: system
              - generic [ref=e165]: containment auto-engaged
              - generic [ref=e166]: chamber S-0063
            - generic [ref=e167]:
              - generic [ref=e169]: 2026-04-10 06:00
              - generic [ref=e170]: system
              - generic [ref=e171]: containment auto-engaged
              - generic [ref=e172]: apparatus S-0015
```

# Test source

```ts
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
> 112 |     expect(request).not.toBeNull();
      |                         ^ Error: expect(received).not.toBeNull()
  113 |   });
  114 | 
  115 | });
  116 | 
```