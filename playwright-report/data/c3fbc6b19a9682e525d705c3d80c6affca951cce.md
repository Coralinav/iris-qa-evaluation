# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: backend\tests\api-regression.spec.ts >> Iris Sciences - Backend (API) Regression Suite >> JTC-011 - Junior Coordinator should NOT be allowed to view general audit logs
- Location: backend\tests\api-regression.spec.ts:39:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 403
Received: 200
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
  1   | import { test, expect } from '../fixtures/apiFixtures';
  2   | import { TEST_CONSTANTS } from '../../data/testData';
  3   | 
  4   | test.describe('Iris Sciences - Backend (API) Regression Suite', () => {
  5   | 
  6   |   // --- SUBJECT SEARCH BUG ---
  7   |   test('TS-003 & JTC-003 - Subject search by official ID format "S-XXXX" should return the subject', async ({ page, loginAs }) => {
  8   |     await loginAs('Junior Test Coordinator');
  9   |     
  10  |     // Perform search via API (shares context cookie from loginAs)
  11  |     const response = await page.request.get(`${TEST_CONSTANTS.BASE_URL}/api/admin/subjects?q=${TEST_CONSTANTS.SUBJECT_IDS.VALID_SEARCH_FORMAT}`);
  12  |     expect(response.status()).toBe(200);
  13  |     
  14  |     const data = await response.json();
  15  |     expect(data.length).toBeGreaterThan(0);
  16  |     expect(data[0].id).toBe(TEST_CONSTANTS.SUBJECT_IDS.VALID_SEARCH_FORMAT);
  17  |   });
  18  | 
  19  |   // --- JUNIOR COORDINATOR PRIVILEGE ESCALATION ---
  20  |   test('JTC-009 - Junior Coordinator should NOT be allowed to update subject records via PATCH', async ({ page, loginAs }) => {
  21  |     await loginAs('Junior Test Coordinator');
  22  |     
  23  |     const response = await page.request.patch(`${TEST_CONSTANTS.BASE_URL}/api/admin/subjects/${TEST_CONSTANTS.SUBJECT_IDS.SUBJECT_0001}`, {
  24  |       data: {
  25  |         name: 'Subject 0001 Updated'
  26  |       }
  27  |     });
  28  |     
  29  |     expect(response.status()).toBe(403);
  30  |   });
  31  | 
  32  |   // --- JUNIOR COORDINATOR BFLA LEAKS ---
  33  |   test('JTC-010 - Junior Coordinator should NOT be allowed to export reports', async ({ page, loginAs }) => {
  34  |     await loginAs('Junior Test Coordinator');
  35  |     const response = await page.request.get(`${TEST_CONSTANTS.BASE_URL}/api/admin/reports/export`);
  36  |     expect(response.status()).toBe(403);
  37  |   });
  38  | 
  39  |   test('JTC-011 - Junior Coordinator should NOT be allowed to view general audit logs', async ({ page, loginAs }) => {
  40  |     await loginAs('Junior Test Coordinator');
  41  |     const response = await page.request.get(`${TEST_CONSTANTS.BASE_URL}/api/admin/audit?limit=10&offset=0`);
> 42  |     expect(response.status()).toBe(403);
      |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  43  |   });
  44  | 
  45  |   // --- TEST SUBJECT BFLA LEAKS ---
  46  |   test('TS-011 - Test Subject should NOT be allowed to access dashboard API', async ({ page, loginAs }) => {
  47  |     await loginAs('Test Subject');
  48  |     const response = await page.request.get(`${TEST_CONSTANTS.BASE_URL}/api/admin/dashboard`);
  49  |     expect(response.status()).toBe(403);
  50  |   });
  51  | 
  52  |   test('TS-012 - Test Subject should NOT be allowed to list all subjects', async ({ page, loginAs }) => {
  53  |     await loginAs('Test Subject');
  54  |     const response = await page.request.get(`${TEST_CONSTANTS.BASE_URL}/api/admin/subjects`);
  55  |     expect(response.status()).toBe(403);
  56  |   });
  57  | 
  58  |   test('TS-013 - Test Subject should NOT be allowed to view audit logs', async ({ page, loginAs }) => {
  59  |     await loginAs('Test Subject');
  60  |     const response = await page.request.get(`${TEST_CONSTANTS.BASE_URL}/api/admin/audit?limit=10&offset=0`);
  61  |     expect(response.status()).toBe(403);
  62  |   });
  63  | 
  64  |   test('TS-014 - Test Subject should NOT be allowed to view roles schema', async ({ page, loginAs }) => {
  65  |     await loginAs('Test Subject');
  66  |     const response = await page.request.get(`${TEST_CONSTANTS.BASE_URL}/api/admin/roles`);
  67  |     expect(response.status()).toBe(403);
  68  |   });
  69  | 
  70  |   test('TS-015 - Test Subject should NOT be allowed to view chambers list', async ({ page, loginAs }) => {
  71  |     await loginAs('Test Subject');
  72  |     const response = await page.request.get(`${TEST_CONSTANTS.BASE_URL}/api/admin/chambers`);
  73  |     expect(response.status()).toBe(403);
  74  |   });
  75  | 
  76  |   test('TS-016 - Test Subject should NOT be allowed to view apparatus list', async ({ page, loginAs }) => {
  77  |     await loginAs('Test Subject');
  78  |     const response = await page.request.get(`${TEST_CONSTANTS.BASE_URL}/api/admin/apparatus`);
  79  |     expect(response.status()).toBe(403);
  80  |   });
  81  | 
  82  |   test('TS-017 - Test Subject should NOT be allowed to view sessions logs', async ({ page, loginAs }) => {
  83  |     await loginAs('Test Subject');
  84  |     const response = await page.request.get(`${TEST_CONSTANTS.BASE_URL}/api/admin/sessions`);
  85  |     expect(response.status()).toBe(403);
  86  |   });
  87  | 
  88  |   test('TS-018 - Test Subject should NOT be allowed to export reports', async ({ page, loginAs }) => {
  89  |     await loginAs('Test Subject');
  90  |     const response = await page.request.get(`${TEST_CONSTANTS.BASE_URL}/api/admin/reports/export`);
  91  |     expect(response.status()).toBe(403);
  92  |   });
  93  |   // --- DIRECTOR OF ENRICHMENT BE TESTS ---
  94  |   test('DIR-005 - Dashboard API should return non-zero QE Index and sessions counted', async ({ page, loginAs }) => {
  95  |     await loginAs('Director of Enrichment');
  96  |     const response = await page.request.get(`${TEST_CONSTANTS.BASE_URL}/api/admin/dashboard`);
  97  |     expect(response.status()).toBe(200);
  98  |     const data = await response.json();
  99  |     expect(data.qe_index).toBeGreaterThan(0);
  100 |     expect(data.sessions_counted).toBeGreaterThan(0);
  101 |   });
  102 | 
  103 |   test('DIR-006 - Exported reports dataset should not include legacy historical sessions', async ({ page, loginAs }) => {
  104 |     await loginAs('Director of Enrichment');
  105 |     const response = await page.request.get(`${TEST_CONSTANTS.BASE_URL}/api/admin/reports/export?format=operator`);
  106 |     expect(response.status()).toBe(200);
  107 |     const data = await response.text();
  108 |     expect(data).not.toContain('SES-IFR-71-Q3-001');
  109 |   });
  110 | 
  111 | });
  112 | 
```