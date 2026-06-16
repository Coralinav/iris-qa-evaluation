import { test, expect } from '../fixtures/uiFixtures';
import { TEST_CONSTANTS } from '../../data/testData';

test.describe('Iris Sciences - Frontend (UI) Regression Suite', () => {

  test.beforeEach(async ({ page, loginPage }) => {
    await loginPage.navigate(TEST_CONSTANTS.BASE_URL);
    if (TEST_CONSTANTS.CASE_TOKEN) {
      await page.evaluate((token) => {
        localStorage.setItem('case_token', token);
      }, TEST_CONSTANTS.CASE_TOKEN);
      await page.reload();
    }
  });

  // --- PUBLIC SITE TESTS ---
  test(' Public Site navigation links should not return 404', async ({ page, publicSitePage }) => {
    await publicSitePage.clickAllPrograms();
    await expect(page).not.toHaveURL(/.*404/);
    await expect(page.locator('text=Not Found')).not.toBeVisible();

    await publicSitePage.navigate(TEST_CONSTANTS.BASE_URL);
    await publicSitePage.clickAllSubjects();
    await expect(page).not.toHaveURL(/.*404/);
    await expect(page.locator('text=Not Found')).not.toBeVisible();
  });

  test('Public Site Annual Reports link should download/open document', async ({ page, publicSitePage }) => {
    const reportPromise = page.waitForEvent('download', { timeout: 3000 }).catch(() => null);
    await publicSitePage.clickFirstAnnualReport();
    const download = await reportPromise;
    expect(download).not.toBeNull();
  });

  // --- TEST SUBJECT UI TESTS ---
  test('Test Subject Dashboard should not display Approve/Reject buttons', async ({ loginAs, dashboardPage }) => {
    await loginAs('Test Subject');
    const approveCount = await dashboardPage.getApproveButtonsCount();
    const rejectCount = await dashboardPage.getRejectButtonsCount();
    expect(approveCount).toBe(0);
    expect(rejectCount).toBe(0);
  });

  test('Test Subject can open subject details panel', async ({ loginAs, dashboardPage, subjectsPage }) => {
    await loginAs('Test Subject');
    await dashboardPage.navigateToTab('Subjects');
    await subjectsPage.selectSubjectRow(TEST_CONSTANTS.SUBJECT_IDS.SUBJECT_0001);
    await expect(subjectsPage.subjectDetailPanelPlaceholder).not.toBeVisible();
  });

  test('Test Subject session creation wizard should block progress on empty fields', async ({ page, loginAs, dashboardPage, sessionsPage }) => {
    await loginAs('Test Subject');
    await dashboardPage.navigateToTab('Sessions');
    await sessionsPage.startWizard();
    await sessionsPage.clickNext();
    expect(await page.locator('text=required').isVisible() || await sessionsPage.subjectDropdown.isVisible()).toBe(true);
  });

  test('Test Subject should be restricted from accessing the Approvals view', async ({ page, loginAs }) => {
    await loginAs('Test Subject');
    await page.goto(`${TEST_CONSTANTS.BASE_URL}/admin/approvals`);
    await expect(page).not.toHaveURL(/.*\/admin\/approvals/);
  });

  // --- JUNIOR COORDINATOR UI TESTS ---
  test('Junior Coordinator Dashboard should not display Approve/Reject buttons', async ({ loginAs, dashboardPage }) => {
    await loginAs('Junior Test Coordinator');
    const approveCount = await dashboardPage.getApproveButtonsCount();
    const rejectCount = await dashboardPage.getRejectButtonsCount();
    expect(approveCount).toBe(0);
    expect(rejectCount).toBe(0);
  });

  test('Junior Coordinator can open subject details panel', async ({ loginAs, dashboardPage, subjectsPage }) => {
    await loginAs('Junior Test Coordinator');
    await dashboardPage.navigateToTab('Subjects');
    await subjectsPage.selectSubjectRow(TEST_CONSTANTS.SUBJECT_IDS.SUBJECT_0002);
    await expect(subjectsPage.subjectDetailPanelPlaceholder).not.toBeVisible();
  });
  // --- DIRECTOR OF ENRICHMENT UI TESTS ---
  test('Methodology page should not display unresolved formula variables', async ({ page, loginAs }) => {
    await loginAs('Director of Enrichment');
    await page.goto(`${TEST_CONSTANTS.BASE_URL}/admin/methodology`);
    await expect(page.locator('text=???')).not.toBeVisible();
  });

  test('Reports page PDF export should trigger a file download', async ({ page, loginAs }) => {
    await loginAs('Director of Enrichment');
    await page.goto(`${TEST_CONSTANTS.BASE_URL}/admin/reports`);
    const downloadPromise = page.waitForEvent('download', { timeout: 3000 }).catch(() => null);
    const pdfButton = page.locator('button:has-text("Export PDF"), a:has-text("Export PDF"), text=Export PDF').first();
    await pdfButton.click();
    const download = await downloadPromise;
    expect(download).not.toBeNull();
  });

  test('Legacy sessions should be filtered or excluded from active Sessions view', async ({ page, loginAs }) => {
    await loginAs('Director of Enrichment');
    await page.goto(`${TEST_CONSTANTS.BASE_URL}/admin/sessions`);
    await expect(page.locator('text=SES-IFR-71-Q3-001')).not.toBeVisible();
  });

  test('Dashboard Approve button should trigger an API call and status update', async ({ page, loginAs }) => {
    await loginAs('Director of Enrichment');
    const requestPromise = page.waitForRequest(req => 
      req.url().includes('/api/admin/sessions/') && req.url().endsWith('/approve') && req.method() === 'POST',
      { timeout: 3000 }
    ).catch(() => null);
    const approveButton = page.locator('button:has-text("Approve")').first();
    await approveButton.click();
    const request = await requestPromise;
    expect(request).not.toBeNull();
  });

});
