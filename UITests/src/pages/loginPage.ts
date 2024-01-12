import { type Page } from '@playwright/test'
import { baseUrl } from '../support/constants';
import { HomePage } from './homePage';

export class LoginPage extends HomePage {
  constructor (page: Page) {
    super(page)

    this.url = `${baseUrl}/login`
  }

  public get emailField () {
    return this.page.locator('.MuiInputBase-input.MuiOutlinedInput-input.css-h4os0j')
  }

  public get passwordField () {
    return this.page.locator('.MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputAdornedEnd.css-putrnr')
  }

  public get LogInButton () {
    return this.page.locator('button:has-text("Zaloguj się")')
  }

  public get messageElement () {
    return this.page.locator('.MuiAlert-message.css-1xsto0d')
  }

  }

