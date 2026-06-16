import { Page, Locator } from '@playwright/test';
import { SessionsPageSelectors } from '../selectors/SessionsPageSelectors';

export class SessionsPage {
  readonly page: Page;
  readonly createSessionButton: Locator;
  readonly nextButton: Locator;
  readonly scheduleButton: Locator;
  readonly subjectDropdown: Locator;
  readonly chamberDropdown: Locator;
  readonly apparatusDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.createSessionButton = page.locator(SessionsPageSelectors.createSessionButton);
    this.nextButton = page.locator(SessionsPageSelectors.nextButton);
    this.scheduleButton = page.locator(SessionsPageSelectors.scheduleButton);
    this.subjectDropdown = page.locator(SessionsPageSelectors.subjectDropdown);
    this.chamberDropdown = page.locator(SessionsPageSelectors.chamberDropdown);
    this.apparatusDropdown = page.locator(SessionsPageSelectors.apparatusDropdown);
  }

  async startWizard() {
    await this.createSessionButton.first().click();
  }

  async clickNext() {
    await this.nextButton.click();
    await this.page.waitForTimeout(300);
  }

  async clickSchedule() {
    await this.scheduleButton.click();
    await this.page.waitForTimeout(500);
  }

  async fillWizardData(subject: string, chamber: string, apparatus: string) {
    if (await this.subjectDropdown.isVisible()) {
      await this.subjectDropdown.selectOption({ label: subject });
    }
    await this.clickNext();

    if (await this.chamberDropdown.isVisible()) {
      await this.chamberDropdown.selectOption({ label: chamber });
    }
    await this.clickNext();

    if (await this.apparatusDropdown.isVisible()) {
      await this.apparatusDropdown.selectOption({ label: apparatus });
    }
    await this.clickNext();
  }
}
