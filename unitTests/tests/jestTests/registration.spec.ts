
import { RegistrationForm } from '../../scr/components/registration_form'

export const registrationForm = new RegistrationForm()

describe('Username tests', () => {
  test('Should multiply int numbers', () => {
    expect(registrationForm.setUserName('Natalia')).toBe('Natalia')
  })
})