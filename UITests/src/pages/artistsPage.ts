import { type Page } from '@playwright/test'
import { baseUrl } from '../support/constants';
import { HomePage } from './homePage';

export class ArtistsPage extends HomePage {
  constructor (page: Page) {
    super(page)

    this.url = `${baseUrl}/master_catalog`
  }

  public get artistProfileLink () {
    return this.page.locator('.MuiTypography-root.MuiTypography-h3.css-hszrb:has-text("Luke Skywaker")')
  }

  public get callArtistButton () {
    return this.page.locator('a[href="tel:undefined"]')
  }
}