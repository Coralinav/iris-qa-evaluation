import { Page, Locator } from '@playwright/test';
import { SubjectsPageSelectors } from '../selectors/SubjectsPageSelectors';

export class SubjectsPage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly noSubjectsText: Locator;
  readonly subjectDetailPanelPlaceholder: Locator;
  readonly subjectRows: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.locator(SubjectsPageSelectors.searchInput);
    this.noSubjectsText = page.locator(SubjectsPageSelectors.noSubjectsText);
    this.subjectDetailPanelPlaceholder = page.locator(SubjectsPageSelectors.subjectDetailPanelPlaceholder);
    this.subjectRows = page.locator(SubjectsPageSelectors.subjectRows);
  }

  async searchSubject(query: string) {
    await this.searchInput.fill(query);
    await this.page.waitForLoadState('networkidle');
  }

  async selectSubjectRow(subjectId: string) {
    const row = this.page.locator(`text=${subjectId}`);
    await row.click();
  }

  async isDetailPanelOpen(): Promise<boolean> {
    return !(await this.subjectDetailPanelPlaceholder.isVisible());
  }
}
