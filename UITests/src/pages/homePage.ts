import { type Page } from '@playwright/test'
import { baseUrl } from '../support/constants';
import { BasePage } from './basePage';
import { LANGUAGES } from '../support/types';

export class HomePage extends BasePage {
  constructor (page: Page) {
    super(page)

    this.url = baseUrl
  }

  public get registrationLink () {
    return this.page.locator('a[href="/signin"]')
  }

  public get navigationMenu () {
    return this.page.locator('.MuiBox-root.css-92brxf')
  }

  public get languagesButton () {
    return this.page.locator('.MuiFormControl-root.css-13sljp9')
  }

  public languagesSelector (language: LANGUAGES) {
    return this.page.locator(`.MuiMenu-list li:has-text("${language}")`)
  }
  }

