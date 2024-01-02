import test, { expect } from '@playwright/test'
import { HomePage } from '../src/pages/homePage';
import { RegistationPage } from '../src/pages/registrationPage';
import { randomName, randomSurname, randomPassword, randomEmail } from '../src/support/testData';
import { confirmingMessage, furtherInstructionmessage } from '../src/support/constants';



test.describe('Tattoolog Official Site Tests', () => {
    let homePage: HomePage;
    let registrationPage: RegistationPage;
  
    test.beforeEach(async ({ page }) => {
      homePage = new HomePage(page)
      registrationPage = new RegistationPage(page)
    
      await homePage.visitPage()
    })
  
    test.afterEach(async ({ page }) => {
      await page.close()
    })
  
    test('Should display message correctly', async () => {
      await homePage.registrationLink.click()

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
})