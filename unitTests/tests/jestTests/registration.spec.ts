import { emptyEmailError, emptyPasswordError, emptyUserNameError, lowerCasePasswordError, missingAtError, missingDotError, missingNumberError, missingSymbolError, notLatinEmailError, notLatinUserNameError, submitError, userNameContainsNumberError } from '../../scr/components/constants/errorMessages';
import { lowerCasePassword, missingNumberPassword, missingSymbolPassword, noAtEmail, noDotEmail, noLatinEmail, notLatinUserName, numbersInsideUserName, valiUserName, validEmail, validPassword } from '../../scr/components/constants/testData';
import { RegistrationForm } from '../../scr/components/registration_form'


export const registrationForm = new RegistrationForm()

describe('Registation form UserName tests', () => {
  test('should submit the form if all fields are valid', () => {
    registrationForm.setUserName(valiUserName);
    registrationForm.setEmail(validEmail);
    registrationForm.setPassword(validPassword);

    const logSpy = jest.spyOn(console, 'log');
    registrationForm.submit();
    expect(logSpy).toHaveBeenCalledWith('Registration successful!');
  });

  test('should return "numbers inside name" error message', () => {
    try {
      registrationForm.setUserName(numbersInsideUserName);
      registrationForm.setEmail(validEmail);
      registrationForm.setPassword(validPassword)

      registrationForm.submit();
    } catch (error: any) {
      expect(error.message).toContain(userNameContainsNumberError)
    }
  })

  test('should return "empty name" error message', () => {
    try {
      registrationForm.setUserName('');
      registrationForm.setEmail(validEmail);
      registrationForm.setPassword(validPassword)

      registrationForm.submit();
    } catch (error: any) {
      expect(error.message).toContain(emptyUserNameError)
    }
  })

  test('should return "not latin input" error message', () => {
    try {
      registrationForm.setUserName(notLatinUserName);
      registrationForm.setEmail(validEmail);
      registrationForm.setPassword(validPassword)

      registrationForm.submit();
    } catch (error: any) {
      expect(error.message).toContain(notLatinUserNameError)
    }
  })
});

describe('Registation form Email tests', () => {
  test('should return "empty email" error message', () => {
    try {
      registrationForm.setUserName(valiUserName);
      registrationForm.setEmail('');
      registrationForm.setPassword(validPassword);

      registrationForm.submit();
    } catch (error: any) {
      expect(error.message).toContain(emptyEmailError)
    }
  });

  test('should return "not latin email" error message', () => {
    try {
      registrationForm.setUserName(valiUserName);
      registrationForm.setEmail(noLatinEmail);
      registrationForm.setPassword(validPassword);

      registrationForm.submit();
    } catch (error: any) {
      expect(error.message).toContain(notLatinEmailError)
    }
  });

  test('should return "missing at" error message', () => {
    try {
      registrationForm.setUserName(valiUserName);
      registrationForm.setEmail(noAtEmail);
      registrationForm.setPassword(validPassword);

      registrationForm.submit();
    } catch (error: any) {
      expect(error.message).toContain(missingAtError)
    }
  });

  test('should return "missing dot" error message', () => {
    try {
      registrationForm.setUserName(valiUserName);
      registrationForm.setEmail(noDotEmail);
      registrationForm.setPassword(validPassword);

      registrationForm.submit();
    } catch (error: any) {
      expect(error.message).toContain(missingDotError)
    }
  });

describe('Registation form Password tests', () => {
  test('should return "empty password" error message', () => {
    try {
      registrationForm.setUserName(valiUserName);
      registrationForm.setEmail(validEmail);
      registrationForm.setPassword('');

      registrationForm.submit();
    } catch (error: any) {
      expect(error.message).toContain(emptyPasswordError)
    }
  });

  test('should return "missing symbol" error message', () => {
    try {
      registrationForm.setUserName(valiUserName);
      registrationForm.setEmail(validEmail);
      registrationForm.setPassword(missingSymbolPassword);

      registrationForm.submit();
    } catch (error: any) {
      expect(error.message).toContain(missingSymbolError)
    }
  });

  test('should return "missing number" error message', () => {
    try {
      registrationForm.setUserName(valiUserName);
      registrationForm.setEmail(validEmail);
      registrationForm.setPassword(missingNumberPassword);

      registrationForm.submit();
    } catch (error: any) {
      expect(error.message).toContain(missingNumberError)
    }
  });
})

  test('should return "lower case" error message', () => {
    try {
      registrationForm.setUserName(valiUserName);
      registrationForm.setEmail(validEmail);
      registrationForm.setPassword(lowerCasePassword);

      registrationForm.submit();
    } catch (error: any) {
      expect(error.message).toContain(lowerCasePasswordError)
    }
  });
})

describe('Registation form tests', () => {
  test('should return error messages if values are not valid', () => {
    try {
      registrationForm.setUserName('');
      registrationForm.setEmail(noAtEmail);
      registrationForm.setPassword(lowerCasePassword);

      registrationForm.submit();
    } catch (error: any) {
      expect(error.message).toContain(emptyUserNameError)
      expect(error.message).toContain(missingAtError)
      expect(error.message).toContain(lowerCasePasswordError)
    }
  });
})