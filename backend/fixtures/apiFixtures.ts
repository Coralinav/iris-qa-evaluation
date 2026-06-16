import { test as base } from '@playwright/test';
import { LoginPage } from '../../frontend/pages/LoginPage';
import { TEST_CONSTANTS } from '../../data/testData';

type ApiFixtures = {
  loginPage: LoginPage;
  loginAs: (roleLabel: 'Test Subject' | 'Junior Test Coordinator' | 'Director of Enrichment') => Promise<void>;
};

export const test = base.extend<ApiFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
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
