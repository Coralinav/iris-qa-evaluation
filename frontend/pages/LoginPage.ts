import { Page, Locator } from '@playwright/test';
import { LoginPageSelectors } from '../selectors/LoginPageSelectors';
import { TEST_CONSTANTS } from '../../data/testData';

export class LoginPage {
  readonly page: Page;
  readonly staffLoginLink: Locator;
  readonly roleSelect: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.staffLoginLink = page.locator(LoginPageSelectors.staffLoginLink);
    this.roleSelect = page.locator(LoginPageSelectors.roleSelect);
    this.passwordInput = page.locator(LoginPageSelectors.passwordInput);
    this.submitButton = page.locator(LoginPageSelectors.submitButton);
  }

  async navigate(baseUrl: string) {
    await this.page.goto(baseUrl);
  }

  async login(roleLabel: string, password: string, caseToken?: string) {
    await this.staffLoginLink.click();
    
    await this.roleSelect.waitFor({ state: 'visible' });

    const token = caseToken || TEST_CONSTANTS.CASE_TOKEN;
    const caseTokenInput = this.page.locator('#case-token-input');
    if (await caseTokenInput.isVisible() && token) {
      await caseTokenInput.fill(token);
    }

    await this.roleSelect.selectOption({ label: roleLabel });
    await this.passwordInput.fill(password);
    await this.submitButton.click();
    
    await this.page.waitForURL(/.*(admin|dashboard)/);
  }
}
