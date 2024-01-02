import { Page } from "@playwright/test";
import { NAVIGATION_ITEMS } from "../../support/types";


export class NavigationBar {
    constructor (protected readonly page: Page) {}
    public getNavigationItemByInnerText (item: NAVIGATION_ITEMS) {
      return this.page.locator(`.MuiStack-root.css-1r1knta a:has-text("${item}")`)
    }
  }
  