# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: backend\tests\api-regression.spec.ts >> Iris Sciences - Backend (API) Regression Suite >> DIR-006 - Exported reports dataset should not include legacy historical sessions
- Location: backend\tests\api-regression.spec.ts:103:7

# Error details

```
Error: expect(received).not.toContain(expected) // indexOf

Expected substring: not "SES-IFR-71-Q3-001"
Received string:        "report_id,session_id,subject_id,subject_status,chamber_id,scheduled_for,outcome_value,welfare_coefficient
OBS-SES-2003,SES-2003,S-0037,active,C-05,2026-03-09 00:00:00,85.98,0.52
OBS-SES-2009,SES-2009,S-0053,active,C-03,2026-02-12 00:00:00,68.14,0.99
OBS-SES-2010,SES-2010,S-0073,active,C-07,2026-04-13 00:00:00,98.64,0.97
OBS-SES-2011,SES-2011,S-0051,active,C-06,2026-02-07 00:00:00,58.72,0.8
OBS-SES-2012,SES-2012,S-0030,active,C-02,2026-04-27 00:00:00,52.57,0.53
OBS-SES-2018,SES-2018,S-0046,active,C-04,2026-04-10 00:00:00,97.4,0.59
OBS-SES-2020,SES-2020,S-0012,active,C-08,2026-02-02 00:00:00,64.97,0.78
OBS-SES-2023,SES-2023,S-0063,voluntary-withdrawal,C-06,2026-04-13 00:00:00,39.09,0.76
OBS-SES-2028,SES-2028,S-0038,voluntary-withdrawal,C-12,2026-03-23 00:00:00,37.08,0.77
OBS-SES-2029,SES-2029,S-0055,voluntary-withdrawal,C-07,2026-02-14 00:00:00,4.29,0.55
OBS-SES-2037,SES-2037,S-0075,active,C-04,2026-01-15 00:00:00,89.02,0.53
OBS-SES-2038,SES-2038,S-0036,in-chamber,C-08,2026-01-22 00:00:00,19.44,0.85
OBS-SES-IFR-71-Q3-001,SES-IFR-71-Q3-001,S-014,post-test,C-Δ-7,1971-09-01 00:00:00,50.74,0.87
"
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
              - button "Approve Approve session SES-2039 for subject S-0016" [ref=e112] [cursor=pointer]: Approve
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
  42  |     expect(response.status()).toBe(403);
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
> 108 |     expect(data).not.toContain('SES-IFR-71-Q3-001');
      |                      ^ Error: expect(received).not.toContain(expected) // indexOf
  109 |   });
  110 | 
  111 | });
  112 | 
```