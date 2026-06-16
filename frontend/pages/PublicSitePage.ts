import { Page, Locator } from '@playwright/test';
import { PublicSitePageSelectors } from '../selectors/PublicSitePageSelectors';

export class PublicSitePage {
  readonly page: Page;
  readonly allProgramsLink: Locator;
  readonly allSubjectsLink: Locator;
  readonly annualReportLinks: Locator;

  constructor(page: Page) {
    this.page = page;
    this.allProgramsLink = page.locator(PublicSitePageSelectors.allProgramsLink);
    this.allSubjectsLink = page.locator(PublicSitePageSelectors.allSubjectsLink);
    this.annualReportLinks = page.locator(PublicSitePageSelectors.annualReportLinks);
  }

  async navigate(baseUrl: string) {
    await this.page.goto(baseUrl);
  }

  async clickAllPrograms() {
    await this.allProgramsLink.click();
  }

  async clickAllSubjects() {
    await this.allSubjectsLink.click();
  }

  async clickFirstAnnualReport() {
    if (await this.annualReportLinks.count() > 0) {
      await this.annualReportLinks.first().click();
    }
  }
}
