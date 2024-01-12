import test, { expect } from '@playwright/test'
import { HomePage } from '../src/pages/homePage';
import { RegistationPage } from '../src/pages/registrationPage';
import { randomName, randomSurname, randomPassword, randomEmail } from '../src/support/testData';
import { bioTaTumTitle, confirmingMessage, errorLoginMessage, furtherInstructionmessage, instagramUrl, learnMoreButtonTextPolish, navigationItemsEn } from '../src/support/constants';
import { LANGUAGES, NAVIGATION_ITEMS } from '../src/support/types';
import { ContactsPage } from '../src/pages/contactsPage';
import { PartnersPage } from '../src/pages/partnersPage';
import { BlogPage } from '../src/pages/blogPage';
import { LoginPage } from '../src/pages/loginPage';

test.describe('Tattoolog Official Site Tests', () => {
  let homePage: HomePage;
  let registrationPage: RegistationPage;
  let contactsPage: ContactsPage;
  let partnersPage: PartnersPage;
  let blogPage: BlogPage;
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page)
    registrationPage = new RegistationPage(page)
    contactsPage = new ContactsPage(page)
    partnersPage = new PartnersPage(page)
    blogPage = new BlogPage(page)
    loginPage = new LoginPage(page)

    await homePage.visitPage()
  })

  test.afterEach(async ({ page }) => {
    await page.close()
  })

  test('Should display message after registration correctly', async () => {
    await homePage.registrationLinkButton.click()
    await registrationPage.nameField.fill(randomName)
    await registrationPage.surnameField.fill(randomSurname)
    await registrationPage.emailField.fill(randomEmail)
    await registrationPage.roleField.click()
    await registrationPage.inputRoleValue.click()
    await registrationPage.passwordField.fill(randomPassword)
    await registrationPage.repeatPasswordField.fill(randomPassword)
    await registrationPage.createAccountButton.click()

    await expect(registrationPage.messageElement).toContainText(confirmingMessage)
    await expect(registrationPage.messageElement).toContainText(furtherInstructionmessage)
  });

  test('Should get Url of new opened page corectly', async ({ context }) => {
    await homePage.navigationBar.getNavigationItemByLink(NAVIGATION_ITEMS.CONTACTS).click()
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      contactsPage.instagramButton.click()
    ])
    await newPage.waitForLoadState();

    await expect(newPage).toHaveURL(instagramUrl)
  });

  test('Should display navigation menu in English after changing the language from Polish on English', async () => {
    await homePage.languagesButton.click()
    await homePage.languagesSelector(LANGUAGES.ENG).click()
    await homePage.navigationMenu.isVisible()
    const receivedArray = (await homePage.getNavigationMenuInnerText());

    expect(receivedArray).toEqual(navigationItemsEn);
  });

  test('Should get title of partner webpage correctly', async ({ context }) => {
    await homePage.navigationBar.getNavigationItemByLink(NAVIGATION_ITEMS.PARTNERS).click()
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      partnersPage.biotatumPartnerLink.click()
    ])
    await newPage.waitForLoadState();

    expect(await newPage.title()).toContain(bioTaTumTitle)
  });

  test('Should display button text "learn more" about blog post in Polish', async () => {
    await homePage.navigationBar.getNavigationItemByLink(NAVIGATION_ITEMS.BLOG).click()
    const buttonText = await blogPage.learnMoreButton.textContent()

    expect(buttonText).toEqual(learnMoreButtonTextPolish)
  });

  test('Should display message after failed login correctly', async () => {
    await homePage.loginLinkButton.click()
    await loginPage.emailField.fill(randomEmail)
    await loginPage.passwordField.fill(randomPassword)
    await loginPage.LogInButton.click()

    await expect(loginPage.messageElement).toContainText(errorLoginMessage)
  });
})
