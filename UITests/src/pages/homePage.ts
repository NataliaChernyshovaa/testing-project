import { type Page } from '@playwright/test'
import { baseUrl } from '../support/constants';
import { BasePage } from './basePage';

export class HomePage extends BasePage {
  constructor (page: Page) {
    super(page)

    this.url = baseUrl
  }

  public get registrationLink () {
    return this.page.locator(`a[href="/signin"]`)
  }
}