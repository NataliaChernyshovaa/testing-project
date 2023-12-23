
import { userNameContainsNumber, userNameIsEmpty, userNameIsNotLatin } from '../../scr/components/constants/errorMessages';
import { userNameLatin } from '../../scr/components/constants/testData';
import { RegistrationForm } from '../../scr/components/registration_form'

export const registrationForm = new RegistrationForm()

describe('Username tests', () => {

    test('Should return the username if valid', () => {
      expect(registrationForm.setUserName(userNameLatin)).toBe(userNameLatin)
    });

    test('Should return "empty name" error message ', () => {
        expect(() => registrationForm.setUserName('')).toThrow(new Error(userNameIsEmpty));
      });

    test('Should return "not latin input" error message ', () => {
        expect(() => registrationForm.setUserName('Наталя')).toThrow(new Error(userNameIsNotLatin));
      });

    test('Should return "numbers inside name" error message ', () => {
        expect(() => registrationForm.setUserName('Natalia2000')).toThrow(new Error(userNameContainsNumber));
      });
  });