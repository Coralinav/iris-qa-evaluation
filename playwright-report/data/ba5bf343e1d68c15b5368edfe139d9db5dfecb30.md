# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: frontend\tests\ui-regression.spec.ts >> Iris Sciences - Frontend (UI) Regression Suite >> TS-004 - Test Subject session creation wizard should block progress on empty fields
- Location: frontend\tests\ui-regression.spec.ts:51:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - link "Skip to content" [ref=e4] [cursor=pointer]:
    - /url: "#admin-main"
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - img [ref=e8]
      - generic [ref=e19]:
        - generic [ref=e20]: iris
        - generic [ref=e21]: SCIENCES
    - navigation "Admin sections" [ref=e22]:
      - link "Dashboard" [ref=e23] [cursor=pointer]:
        - /url: /admin
      - link "Subjects" [ref=e24] [cursor=pointer]:
        - /url: /admin/subjects
      - link "Chambers" [ref=e25] [cursor=pointer]:
        - /url: /admin/chambers
      - link "Sessions" [ref=e26] [cursor=pointer]:
        - /url: /admin/sessions
      - link "Approvals" [ref=e27] [cursor=pointer]:
        - /url: /admin/approvals
      - link "Apparatus" [ref=e28] [cursor=pointer]:
        - /url: /admin/apparatus
      - link "Reports" [ref=e29] [cursor=pointer]:
        - /url: /admin/reports
      - link "Audit" [ref=e30] [cursor=pointer]:
        - /url: /admin/audit
  - generic [ref=e31]:
    - banner [ref=e32]:
      - searchbox "Search admin records" [ref=e33]
      - link "Public site →" [ref=e35] [cursor=pointer]:
        - /url: /
    - main [ref=e36]:
      - generic [ref=e38]:
        - paragraph [ref=e39]: Operations
        - heading "Test sessions" [level=2] [ref=e40]
      - generic [ref=e41]:
        - list [ref=e42]:
          - listitem [ref=e43]:
            - generic [ref=e44]: "1"
            - generic [ref=e45]: Subject
          - listitem [ref=e47]:
            - generic [ref=e48]: "2"
            - generic [ref=e49]: Chamber
          - listitem [ref=e51]:
            - generic [ref=e52]: "3"
            - generic [ref=e53]: Apparatus
          - listitem [ref=e55]:
            - generic [ref=e56]: "4"
            - generic [ref=e57]: Schedule
          - listitem [ref=e59]:
            - generic [ref=e60]: "5"
            - generic [ref=e61]: Review
        - generic [ref=e62]:
          - generic [ref=e63]: Chamber
          - combobox "Chamber" [ref=e64]:
            - option "— pick a chamber —" [selected]
            - option "C-01 · Wing A"
            - option "C-02 · Wing B"
            - option "C-03 · Wing Γ"
            - option "C-04 · Wing Γ"
            - option "C-05 · Wing A"
            - option "C-06 · Wing Γ"
            - option "C-07 · Wing A"
            - option "C-08 · Wing A"
            - option "C-09 · Wing A"
            - option "C-10 · Wing A"
            - option "C-11 · Wing A"
            - option "C-12 · Wing A"
            - option "C-Δ-7 · Wing Δ"
        - generic [ref=e65]:
          - button "Cancel" [ref=e66] [cursor=pointer]
          - generic [ref=e67]:
            - button "Back" [ref=e68] [cursor=pointer]
            - button "Next" [active] [ref=e69] [cursor=pointer]
      - table "All test sessions" [ref=e72]:
        - caption [ref=e73]: All test sessions
        - rowgroup [ref=e74]:
          - row "ID Subject Chamber Scheduled State" [ref=e75]:
            - columnheader "ID" [ref=e76]
            - columnheader "Subject" [ref=e77]
            - columnheader "Chamber" [ref=e78]
            - columnheader "Scheduled" [ref=e79]
            - columnheader "State" [ref=e80]
        - rowgroup [ref=e81]:
          - row "SES-2012 S-0030 C-02 2026-04-27 06:00 completed" [ref=e82]:
            - cell "SES-2012" [ref=e83]
            - cell "S-0030" [ref=e84]
            - cell "C-02" [ref=e85]
            - cell "2026-04-27 06:00" [ref=e86]
            - cell "completed" [ref=e87]:
              - generic [ref=e88]: completed
          - row "SES-2035 S-0025 C-02 2026-04-16 06:00 approved" [ref=e90]:
            - cell "SES-2035" [ref=e91]
            - cell "S-0025" [ref=e92]
            - cell "C-02" [ref=e93]
            - cell "2026-04-16 06:00" [ref=e94]
            - cell "approved" [ref=e95]:
              - generic [ref=e96]: approved
          - row "SES-2022 S-0048 C-12 2026-04-14 06:00 approved" [ref=e98]:
            - cell "SES-2022" [ref=e99]
            - cell "S-0048" [ref=e100]
            - cell "C-12" [ref=e101]
            - cell "2026-04-14 06:00" [ref=e102]
            - cell "approved" [ref=e103]:
              - generic [ref=e104]: approved
          - row "SES-2010 S-0073 C-07 2026-04-13 06:00 completed" [ref=e106]:
            - cell "SES-2010" [ref=e107]
            - cell "S-0073" [ref=e108]
            - cell "C-07" [ref=e109]
            - cell "2026-04-13 06:00" [ref=e110]
            - cell "completed" [ref=e111]:
              - generic [ref=e112]: completed
          - row "SES-2023 S-0063 C-06 2026-04-13 06:00 completed" [ref=e114]:
            - cell "SES-2023" [ref=e115]
            - cell "S-0063" [ref=e116]
            - cell "C-06" [ref=e117]
            - cell "2026-04-13 06:00" [ref=e118]
            - cell "completed" [ref=e119]:
              - generic [ref=e120]: completed
          - row "SES-2018 S-0046 C-04 2026-04-10 06:00 completed" [ref=e122]:
            - cell "SES-2018" [ref=e123]
            - cell "S-0046" [ref=e124]
            - cell "C-04" [ref=e125]
            - cell "2026-04-10 06:00" [ref=e126]
            - cell "completed" [ref=e127]:
              - generic [ref=e128]: completed
          - row "SES-2000 S-0077 C-04 2026-04-05 06:00 in-progress" [ref=e130]:
            - cell "SES-2000" [ref=e131]
            - cell "S-0077" [ref=e132]
            - cell "C-04" [ref=e133]
            - cell "2026-04-05 06:00" [ref=e134]
            - cell "in-progress" [ref=e135]:
              - generic [ref=e136]: in-progress
          - row "SES-2036 S-0049 C-05 2026-04-03 06:00 approved" [ref=e138]:
            - cell "SES-2036" [ref=e139]
            - cell "S-0049" [ref=e140]
            - cell "C-05" [ref=e141]
            - cell "2026-04-03 06:00" [ref=e142]
            - cell "approved" [ref=e143]:
              - generic [ref=e144]: approved
          - row "SES-2027 S-0077 C-11 2026-03-28 06:00 cancelled" [ref=e146]:
            - cell "SES-2027" [ref=e147]
            - cell "S-0077" [ref=e148]
            - cell "C-11" [ref=e149]
            - cell "2026-03-28 06:00" [ref=e150]
            - cell "cancelled" [ref=e151]:
              - generic [ref=e152]: cancelled
          - row "SES-2028 S-0038 C-12 2026-03-23 06:00 completed" [ref=e154]:
            - cell "SES-2028" [ref=e155]
            - cell "S-0038" [ref=e156]
            - cell "C-12" [ref=e157]
            - cell "2026-03-23 06:00" [ref=e158]
            - cell "completed" [ref=e159]:
              - generic [ref=e160]: completed
          - row "SES-2006 S-0063 C-05 2026-03-21 06:00 approved" [ref=e162]:
            - cell "SES-2006" [ref=e163]
            - cell "S-0063" [ref=e164]
            - cell "C-05" [ref=e165]
            - cell "2026-03-21 06:00" [ref=e166]
            - cell "approved" [ref=e167]:
              - generic [ref=e168]: approved
          - row "SES-2016 S-0013 C-05 2026-03-20 06:00 approved" [ref=e170]:
            - cell "SES-2016" [ref=e171]
            - cell "S-0013" [ref=e172]
            - cell "C-05" [ref=e173]
            - cell "2026-03-20 06:00" [ref=e174]
            - cell "approved" [ref=e175]:
              - generic [ref=e176]: approved
          - row "SES-2021 S-0035 C-03 2026-03-16 06:00 rejected" [ref=e178]:
            - cell "SES-2021" [ref=e179]
            - cell "S-0035" [ref=e180]
            - cell "C-03" [ref=e181]
            - cell "2026-03-16 06:00" [ref=e182]
            - cell "rejected" [ref=e183]:
              - generic [ref=e184]: rejected
          - row "SES-2039 S-0016 C-05 2026-03-16 06:00 pending-approval" [ref=e186]:
            - cell "SES-2039" [ref=e187]
            - cell "S-0016" [ref=e188]
            - cell "C-05" [ref=e189]
            - cell "2026-03-16 06:00" [ref=e190]
            - cell "pending-approval" [ref=e191]:
              - generic [ref=e192]: pending-approval
          - row "SES-2001 S-0005 C-06 2026-03-14 06:00 pending-approval" [ref=e194]:
            - cell "SES-2001" [ref=e195]
            - cell "S-0005" [ref=e196]
            - cell "C-06" [ref=e197]
            - cell "2026-03-14 06:00" [ref=e198]
            - cell "pending-approval" [ref=e199]:
              - generic [ref=e200]: pending-approval
          - row "SES-2003 S-0037 C-05 2026-03-09 06:00 completed" [ref=e202]:
            - cell "SES-2003" [ref=e203]
            - cell "S-0037" [ref=e204]
            - cell "C-05" [ref=e205]
            - cell "2026-03-09 06:00" [ref=e206]
            - cell "completed" [ref=e207]:
              - generic [ref=e208]: completed
          - row "SES-2014 S-0066 C-05 2026-03-08 06:00 approved" [ref=e210]:
            - cell "SES-2014" [ref=e211]
            - cell "S-0066" [ref=e212]
            - cell "C-05" [ref=e213]
            - cell "2026-03-08 06:00" [ref=e214]
            - cell "approved" [ref=e215]:
              - generic [ref=e216]: approved
          - row "SES-2034 S-0022 C-12 2026-03-08 06:00 cancelled" [ref=e218]:
            - cell "SES-2034" [ref=e219]
            - cell "S-0022" [ref=e220]
            - cell "C-12" [ref=e221]
            - cell "2026-03-08 06:00" [ref=e222]
            - cell "cancelled" [ref=e223]:
              - generic [ref=e224]: cancelled
          - row "SES-2031 S-0064 C-02 2026-03-06 06:00 rejected" [ref=e226]:
            - cell "SES-2031" [ref=e227]
            - cell "S-0064" [ref=e228]
            - cell "C-02" [ref=e229]
            - cell "2026-03-06 06:00" [ref=e230]
            - cell "rejected" [ref=e231]:
              - generic [ref=e232]: rejected
          - row "SES-2019 S-0050 C-09 2026-02-25 06:00 in-progress" [ref=e234]:
            - cell "SES-2019" [ref=e235]
            - cell "S-0050" [ref=e236]
            - cell "C-09" [ref=e237]
            - cell "2026-02-25 06:00" [ref=e238]
            - cell "in-progress" [ref=e239]:
              - generic [ref=e240]: in-progress
          - row "SES-2026 S-0045 C-06 2026-02-18 06:00 draft" [ref=e242]:
            - cell "SES-2026" [ref=e243]
            - cell "S-0045" [ref=e244]
            - cell "C-06" [ref=e245]
            - cell "2026-02-18 06:00" [ref=e246]
            - cell "draft" [ref=e247]:
              - generic [ref=e248]: draft
          - row "SES-2024 S-0073 C-12 2026-02-16 06:00 draft" [ref=e250]:
            - cell "SES-2024" [ref=e251]
            - cell "S-0073" [ref=e252]
            - cell "C-12" [ref=e253]
            - cell "2026-02-16 06:00" [ref=e254]
            - cell "draft" [ref=e255]:
              - generic [ref=e256]: draft
          - row "SES-2029 S-0055 C-07 2026-02-14 06:00 completed" [ref=e258]:
            - cell "SES-2029" [ref=e259]
            - cell "S-0055" [ref=e260]
            - cell "C-07" [ref=e261]
            - cell "2026-02-14 06:00" [ref=e262]
            - cell "completed" [ref=e263]:
              - generic [ref=e264]: completed
          - row "SES-2009 S-0053 C-03 2026-02-12 06:00 completed" [ref=e266]:
            - cell "SES-2009" [ref=e267]
            - cell "S-0053" [ref=e268]
            - cell "C-03" [ref=e269]
            - cell "2026-02-12 06:00" [ref=e270]
            - cell "completed" [ref=e271]:
              - generic [ref=e272]: completed
          - row "SES-2011 S-0051 C-06 2026-02-07 06:00 completed" [ref=e274]:
            - cell "SES-2011" [ref=e275]
            - cell "S-0051" [ref=e276]
            - cell "C-06" [ref=e277]
            - cell "2026-02-07 06:00" [ref=e278]
            - cell "completed" [ref=e279]:
              - generic [ref=e280]: completed
          - row "SES-2033 S-0036 C-11 2026-02-06 06:00 cancelled" [ref=e282]:
            - cell "SES-2033" [ref=e283]
            - cell "S-0036" [ref=e284]
            - cell "C-11" [ref=e285]
            - cell "2026-02-06 06:00" [ref=e286]
            - cell "cancelled" [ref=e287]:
              - generic [ref=e288]: cancelled
          - row "SES-2025 S-0011 C-06 2026-02-05 06:00 draft" [ref=e290]:
            - cell "SES-2025" [ref=e291]
            - cell "S-0011" [ref=e292]
            - cell "C-06" [ref=e293]
            - cell "2026-02-05 06:00" [ref=e294]
            - cell "draft" [ref=e295]:
              - generic [ref=e296]: draft
          - row "SES-2020 S-0012 C-08 2026-02-02 06:00 completed" [ref=e298]:
            - cell "SES-2020" [ref=e299]
            - cell "S-0012" [ref=e300]
            - cell "C-08" [ref=e301]
            - cell "2026-02-02 06:00" [ref=e302]
            - cell "completed" [ref=e303]:
              - generic [ref=e304]: completed
          - row "SES-2008 S-0073 C-07 2026-02-01 06:00 pending-approval" [ref=e306]:
            - cell "SES-2008" [ref=e307]
            - cell "S-0073" [ref=e308]
            - cell "C-07" [ref=e309]
            - cell "2026-02-01 06:00" [ref=e310]
            - cell "pending-approval" [ref=e311]:
              - generic [ref=e312]: pending-approval
          - row "SES-2015 S-0010 C-02 2026-02-01 06:00 draft" [ref=e314]:
            - cell "SES-2015" [ref=e315]
            - cell "S-0010" [ref=e316]
            - cell "C-02" [ref=e317]
            - cell "2026-02-01 06:00" [ref=e318]
            - cell "draft" [ref=e319]:
              - generic [ref=e320]: draft
          - row "SES-2032 S-0065 C-12 2026-01-27 06:00 approved" [ref=e322]:
            - cell "SES-2032" [ref=e323]
            - cell "S-0065" [ref=e324]
            - cell "C-12" [ref=e325]
            - cell "2026-01-27 06:00" [ref=e326]
            - cell "approved" [ref=e327]:
              - generic [ref=e328]: approved
          - row "SES-2017 S-0079 C-01 2026-01-23 06:00 pending-approval" [ref=e330]:
            - cell "SES-2017" [ref=e331]
            - cell "S-0079" [ref=e332]
            - cell "C-01" [ref=e333]
            - cell "2026-01-23 06:00" [ref=e334]
            - cell "pending-approval" [ref=e335]:
              - generic [ref=e336]: pending-approval
          - row "SES-2038 S-0036 C-08 2026-01-22 06:00 completed" [ref=e338]:
            - cell "SES-2038" [ref=e339]
            - cell "S-0036" [ref=e340]
            - cell "C-08" [ref=e341]
            - cell "2026-01-22 06:00" [ref=e342]
            - cell "completed" [ref=e343]:
              - generic [ref=e344]: completed
          - row "SES-2004 S-0063 C-12 2026-01-20 06:00 rejected" [ref=e346]:
            - cell "SES-2004" [ref=e347]
            - cell "S-0063" [ref=e348]
            - cell "C-12" [ref=e349]
            - cell "2026-01-20 06:00" [ref=e350]
            - cell "rejected" [ref=e351]:
              - generic [ref=e352]: rejected
          - row "SES-2007 S-0075 C-07 2026-01-20 06:00 draft" [ref=e354]:
            - cell "SES-2007" [ref=e355]
            - cell "S-0075" [ref=e356]
            - cell "C-07" [ref=e357]
            - cell "2026-01-20 06:00" [ref=e358]
            - cell "draft" [ref=e359]:
              - generic [ref=e360]: draft
          - row "SES-2005 S-0078 C-01 2026-01-17 06:00 cancelled" [ref=e362]:
            - cell "SES-2005" [ref=e363]
            - cell "S-0078" [ref=e364]
            - cell "C-01" [ref=e365]
            - cell "2026-01-17 06:00" [ref=e366]
            - cell "cancelled" [ref=e367]:
              - generic [ref=e368]: cancelled
          - row "SES-2030 S-0006 C-11 2026-01-15 06:00 draft" [ref=e370]:
            - cell "SES-2030" [ref=e371]
            - cell "S-0006" [ref=e372]
            - cell "C-11" [ref=e373]
            - cell "2026-01-15 06:00" [ref=e374]
            - cell "draft" [ref=e375]:
              - generic [ref=e376]: draft
          - row "SES-2037 S-0075 C-04 2026-01-15 06:00 completed" [ref=e378]:
            - cell "SES-2037" [ref=e379]
            - cell "S-0075" [ref=e380]
            - cell "C-04" [ref=e381]
            - cell "2026-01-15 06:00" [ref=e382]
            - cell "completed" [ref=e383]:
              - generic [ref=e384]: completed
          - row "SES-2013 S-0070 C-07 2026-01-06 06:00 approved" [ref=e386]:
            - cell "SES-2013" [ref=e387]
            - cell "S-0070" [ref=e388]
            - cell "C-07" [ref=e389]
            - cell "2026-01-06 06:00" [ref=e390]
            - cell "approved" [ref=e391]:
              - generic [ref=e392]: approved
          - row "SES-2002 S-0033 C-12 2026-01-02 06:00 approved" [ref=e394]:
            - cell "SES-2002" [ref=e395]
            - cell "S-0033" [ref=e396]
            - cell "C-12" [ref=e397]
            - cell "2026-01-02 06:00" [ref=e398]
            - cell "approved" [ref=e399]:
              - generic [ref=e400]: approved
          - row "SES-IFR-71-Q3-001 S-014 C-Δ-7 1971-09-01 06:00 completed" [ref=e402]:
            - cell "SES-IFR-71-Q3-001" [ref=e403]
            - cell "S-014" [ref=e404]
            - cell "C-Δ-7" [ref=e405]
            - cell "1971-09-01 06:00" [ref=e406]
            - cell "completed" [ref=e407]:
              - generic [ref=e408]: completed
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
> 56  |     expect(await page.locator('text=required').isVisible() || await sessionsPage.subjectDropdown.isVisible()).toBe(true);
      |                                                                                                               ^ Error: expect(received).toBe(expected) // Object.is equality
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