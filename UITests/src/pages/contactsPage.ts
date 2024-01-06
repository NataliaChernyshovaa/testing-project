import { type Page } from '@playwright/test'
import { baseUrl } from '../support/constants'
import { HomePage } from './homePage';

export class ContactsPage extends HomePage {
  constructor (page: Page) {
    super(page)

    this.url = `${baseUrl}/contacts`
  }

  public get instagramButton () {
    return this.page.locator('.MuiButtonBase-root.contacts__icon [data-testid="InstagramIcon"]')
  }
}