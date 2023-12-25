
import { emptyEmailError, emptyPasswordError, emptyUserNameError, lowerCasePasswordError, missingAtError, missingDotError, missingNumberError, missingSymbolError, notLatinEmailError, notLatinUserNameError, userNameContainsNumberError } from '../../scr/components/constants/errorMessages';
import { lowerCasePassword, missingNumberPassword, missingSymbolPassword, noAtEmail, noDotEmail, noLatinEmail, notLatinUserName, numbersInsideUserName, valiUserName, validEmail, validPassword } from '../../scr/components/constants/testData';
import { RegistrationForm } from '../../scr/components/registration_form'

export const registrationForm = new RegistrationForm()


describe('Username tests', () => {

    test('Should return the username if valid', () => {
      expect(registrationForm.setUserName(valiUserName)).toBe(valiUserName)
    });

    test('Should return "empty name" error message ', () => {
        expect(() => registrationForm.setUserName('')).toThrow(new Error(emptyUserNameError));
      });

    test('Should return "not latin input" error message ', () => {
        expect(() => registrationForm.setUserName(notLatinUserName)).toThrow(new Error(notLatinUserNameError));
      });

    test('Should return "numbers inside name" error message ', () => {
        expect(() => registrationForm.setUserName(numbersInsideUserName)).toThrow(new Error(userNameContainsNumberError));
      });
  });

  describe('Email tests', () => {

    test('Should return email if valid', () => {
      expect(registrationForm.setEmail(validEmail)).toBe(validEmail)
    });

    test('Should return "empty email" error message', () => {
      expect(() => registrationForm.setEmail('')).toThrow(new Error(emptyEmailError));
    });

    test('Should return "missing at" error message', () => {
      expect(() => registrationForm.setEmail(noAtEmail)).toThrow(new Error(missingAtError));
    });

    test('Should return "missing dot" error message', () => {
      expect(() => registrationForm.setEmail(noDotEmail)).toThrow(new Error(missingDotError));
    });

    test('Should return "email is not latin" error message', () => {
      expect(() => registrationForm.setEmail(noLatinEmail)).toThrow(new Error(notLatinEmailError));
    });

  describe('Password tests', () => {

    test ('Should return password if valid', () => {
      expect(registrationForm.setPassword(validPassword)).toBe(validPassword)
    });

    test('Should return "missing symbols" error message', () => {
      expect(() => registrationForm.setPassword(missingSymbolPassword)).toThrow(new Error(missingSymbolError));
    });

    test('Should return "empty password" error message', () => {
      expect(() => registrationForm.setPassword('')).toThrow(new Error(emptyPasswordError));
    })

    test('Should return "lower case" error message', () => {
      expect(() => registrationForm.setPassword(lowerCasePassword)).toThrow(new Error(lowerCasePasswordError));
    })

    test('Should return "missing number" error message', () => {
      expect(() => registrationForm.setPassword(missingNumberPassword)).toThrow(new Error(missingNumberError));
    })
  })
});

