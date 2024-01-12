import { type Page } from '@playwright/test';
import { type NAVIGATION_ITEMS } from '../../support/types';

export class NavigationBar {
  constructor (protected readonly page: Page) {}
  public getNavigationItemByLink (item: NAVIGATION_ITEMS) {
    return this.page.locator(`.MuiBox-root.css-92brxf a[href="${item}"]`)
  }
}
