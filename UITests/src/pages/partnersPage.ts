import { type Page } from '@playwright/test'
import { baseUrl } from '../support/constants';
import { HomePage } from './homePage';


export class PartnersPage extends HomePage {
  constructor (page: Page) {
    super(page)

    this.url = `${baseUrl}/partners`
  }

  public get biotatumPartnerLink () {
    return this.page.locator('img[src="https://tattolog.fra1.digitaloceanspaces.com/uploads/partners/logo/biotatum_logo.png"]')
  }

  }

