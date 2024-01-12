import { type Page } from '@playwright/test'
import { baseUrl } from '../support/constants';
import { HomePage } from './homePage';

export class BlogPage extends HomePage {
  constructor (page: Page) {
    super(page)

    this.url = `${baseUrl}/master_catalog`
  }

  public get learnMoreButton () {
    return this.page.locator('.MuiCardActions-root.MuiCardActions-spacing.post-card-actions.css-3zukih').first()
  }
}
