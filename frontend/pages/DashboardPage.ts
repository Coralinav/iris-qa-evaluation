import { Page, Locator } from '@playwright/test';
import { DashboardPageSelectors } from '../selectors/DashboardPageSelectors';

export class DashboardPage {
  readonly page: Page;
  readonly pendingApprovalsTitle: Locator;
  readonly approveButtons: Locator;
  readonly rejectButtons: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pendingApprovalsTitle = page.locator(DashboardPageSelectors.pendingApprovalsTitle);
    this.approveButtons = page.locator(DashboardPageSelectors.approveButtons);
    this.rejectButtons = page.locator(DashboardPageSelectors.rejectButtons);
  }

  async navigateToTab(tabName: string) {
    await this.page.locator(`a:text-is("${tabName}")`).click();
  }

  async getApproveButtonsCount(): Promise<number> {
    await this.page.waitForLoadState('networkidle');
    return await this.approveButtons.count();
  }

  async getRejectButtonsCount(): Promise<number> {
    await this.page.waitForLoadState('networkidle');
    return await this.rejectButtons.count();
  }
}
