import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { PublicSitePage } from '../pages/PublicSitePage';
import { DashboardPage } from '../pages/DashboardPage';
import { SubjectsPage } from '../pages/SubjectsPage';
import { SessionsPage } from '../pages/SessionsPage';
import { TEST_CONSTANTS } from '../../data/testData';

type UiFixtures = {
  loginPage: LoginPage;
  publicSitePage: PublicSitePage;
  dashboardPage: DashboardPage;
  subjectsPage: SubjectsPage;
  sessionsPage: SessionsPage;
  loginAs: (roleLabel: 'Test Subject' | 'Junior Test Coordinator' | 'Director of Enrichment') => Promise<void>;
};

export const test = base.extend<UiFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  publicSitePage: async ({ page }, use) => {
    await use(new PublicSitePage(page));
  },
  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },
  subjectsPage: async ({ page }, use) => {
    await use(new SubjectsPage(page));
  },
  sessionsPage: async ({ page }, use) => {
    await use(new SessionsPage(page));
  },
  loginAs: async ({ page, loginPage }, use) => {
    const loginAsFn = async (roleLabel: 'Test Subject' | 'Junior Test Coordinator' | 'Director of Enrichment') => {
      let password = '';
      if (roleLabel === 'Test Subject') {
        password = TEST_CONSTANTS.ROLES.TEST_SUBJECT.PASSWORD;
      } else if (roleLabel === 'Junior Test Coordinator') {
        password = TEST_CONSTANTS.ROLES.JUNIOR_COORDINATOR.PASSWORD;
      } else if (roleLabel === 'Director of Enrichment') {
        password = TEST_CONSTANTS.ROLES.DIRECTOR.PASSWORD;
      }

      await loginPage.navigate(TEST_CONSTANTS.BASE_URL);
      
      if (TEST_CONSTANTS.CASE_TOKEN) {
        await page.evaluate((token) => {
          localStorage.setItem('case_token', token);
        }, TEST_CONSTANTS.CASE_TOKEN);
        await page.reload();
      }
      
      await loginPage.login(roleLabel, password);
    };
    
    await use(loginAsFn);
  }
});

export { expect } from '@playwright/test';
