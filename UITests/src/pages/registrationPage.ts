import { type Page } from '@playwright/test'
import { baseUrl } from '../support/constants';
import { BasePage } from './basePage';
import { ROLE } from '../support/types';

export class RegistationPage extends BasePage {
  constructor (page: Page) {
    super(page)

    this.url = `${baseUrl}/signin`
  }

  public get nameField () {
    return this.page.locator('.MuiInputBase-input.MuiOutlinedInput-input.css-h4os0j').nth(0)
  }

  public get surnameField () {
    return this.page.locator('.MuiInputBase-input.MuiOutlinedInput-input.css-h4os0j').nth(1)
  }

  public get roleField () {
    return this.page.locator('.MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input.css-ufm59s')
  }

  public get inputRoleValue () {
    return this.page.locator(`.MuiButtonBase-root.MuiMenuItem-root.MuiMenuItem-gutters.MuiMenuItem-root.MuiMenuItem-gutters.css-1m4028d:has-text("${ROLE.MASTER}")`)
  }

  public get emailField () {
    return this.page.locator('.MuiInputBase-input.MuiOutlinedInput-input.css-h4os0j').nth(2)
  }

  public get passwordField () {
    return this.page.locator('.MuiInputBase-input.MuiOutlinedInput-input.css-h4os0j').nth(3)
  }
  
  public get repeatPasswordField () {
    return this.page.locator('.MuiInputBase-input.MuiOutlinedInput-input.css-h4os0j').nth(4)
  }

  public get createAccountButton () {
    return this.page.locator('button:has-text("Utwórz konto")')
  }

  public get messageElement () {
    return this.page.locator('.MuiBox-root.css-3z75l1')
  }
}