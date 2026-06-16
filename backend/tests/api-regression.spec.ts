import { test, expect } from '../fixtures/apiFixtures';
import { TEST_CONSTANTS } from '../../data/testData';

test.describe('Iris Sciences - Backend (API) Regression Suite', () => {

  // --- SUBJECT SEARCH BUG ---
  test('Subject search by official ID format "S-XXXX" should return the subject', async ({ page, loginAs }) => {
    await loginAs('Junior Test Coordinator');
    
    const response = await page.request.get(`${TEST_CONSTANTS.BASE_URL}/api/admin/subjects?q=${TEST_CONSTANTS.SUBJECT_IDS.VALID_SEARCH_FORMAT}`);
    expect(response.status()).toBe(200);
    
    const data = await response.json();
    expect(data.length).toBeGreaterThan(0);
    expect(data[0].id).toBe(TEST_CONSTANTS.SUBJECT_IDS.VALID_SEARCH_FORMAT);
  });

  // --- JUNIOR COORDINATOR PRIVILEGE ESCALATION ---
  test('Junior Coordinator should NOT be allowed to update subject records via PATCH', async ({ page, loginAs }) => {
    await loginAs('Junior Test Coordinator');
    
    const response = await page.request.patch(`${TEST_CONSTANTS.BASE_URL}/api/admin/subjects/${TEST_CONSTANTS.SUBJECT_IDS.SUBJECT_0001}`, {
      data: {
        name: 'Subject 0001 Updated'
      }
    });
    
    expect(response.status()).toBe(403);
  });

  // --- JUNIOR COORDINATOR BFLA LEAKS ---
  test('Junior Coordinator should NOT be allowed to export reports', async ({ page, loginAs }) => {
    await loginAs('Junior Test Coordinator');
    const response = await page.request.get(`${TEST_CONSTANTS.BASE_URL}/api/admin/reports/export`);
    expect(response.status()).toBe(403);
  });

  test('Junior Coordinator should NOT be allowed to view general audit logs', async ({ page, loginAs }) => {
    await loginAs('Junior Test Coordinator');
    const response = await page.request.get(`${TEST_CONSTANTS.BASE_URL}/api/admin/audit?limit=10&offset=0`);
    expect(response.status()).toBe(403);
  });

  // --- TEST SUBJECT BFLA LEAKS ---
  test('Test Subject should NOT be allowed to access dashboard API', async ({ page, loginAs }) => {
    await loginAs('Test Subject');
    const response = await page.request.get(`${TEST_CONSTANTS.BASE_URL}/api/admin/dashboard`);
    expect(response.status()).toBe(403);
  });

  test('Test Subject should NOT be allowed to list all subjects', async ({ page, loginAs }) => {
    await loginAs('Test Subject');
    const response = await page.request.get(`${TEST_CONSTANTS.BASE_URL}/api/admin/subjects`);
    expect(response.status()).toBe(403);
  });

  test('Test Subject should NOT be allowed to view audit logs', async ({ page, loginAs }) => {
    await loginAs('Test Subject');
    const response = await page.request.get(`${TEST_CONSTANTS.BASE_URL}/api/admin/audit?limit=10&offset=0`);
    expect(response.status()).toBe(403);
  });

  test('Test Subject should NOT be allowed to view roles schema', async ({ page, loginAs }) => {
    await loginAs('Test Subject');
    const response = await page.request.get(`${TEST_CONSTANTS.BASE_URL}/api/admin/roles`);
    expect(response.status()).toBe(403);
  });

  test('Test Subject should NOT be allowed to view chambers list', async ({ page, loginAs }) => {
    await loginAs('Test Subject');
    const response = await page.request.get(`${TEST_CONSTANTS.BASE_URL}/api/admin/chambers`);
    expect(response.status()).toBe(403);
  });

  test('Test Subject should NOT be allowed to view apparatus list', async ({ page, loginAs }) => {
    await loginAs('Test Subject');
    const response = await page.request.get(`${TEST_CONSTANTS.BASE_URL}/api/admin/apparatus`);
    expect(response.status()).toBe(403);
  });

  test('Test Subject should NOT be allowed to view sessions logs', async ({ page, loginAs }) => {
    await loginAs('Test Subject');
    const response = await page.request.get(`${TEST_CONSTANTS.BASE_URL}/api/admin/sessions`);
    expect(response.status()).toBe(403);
  });

  test('Test Subject should NOT be allowed to export reports', async ({ page, loginAs }) => {
    await loginAs('Test Subject');
    const response = await page.request.get(`${TEST_CONSTANTS.BASE_URL}/api/admin/reports/export`);
    expect(response.status()).toBe(403);
  });
  // --- DIRECTOR OF ENRICHMENT BE TESTS ---
  test('Dashboard API should return non-zero QE Index and sessions counted', async ({ page, loginAs }) => {
    await loginAs('Director of Enrichment');
    const response = await page.request.get(`${TEST_CONSTANTS.BASE_URL}/api/admin/dashboard`);
    expect(response.status()).toBe(200);
    const data = await response.json();
    expect(data.qe_index).toBeGreaterThan(0);
    expect(data.sessions_counted).toBeGreaterThan(0);
  });

  test('Exported reports dataset should not include legacy historical sessions', async ({ page, loginAs }) => {
    await loginAs('Director of Enrichment');
    const response = await page.request.get(`${TEST_CONSTANTS.BASE_URL}/api/admin/reports/export?format=operator`);
    expect(response.status()).toBe(200);
    const data = await response.text();
    expect(data).not.toContain('SES-IFR-71-Q3-001');
  });

});
