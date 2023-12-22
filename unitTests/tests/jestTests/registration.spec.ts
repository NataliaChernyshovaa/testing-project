import { RegistrationForm } from "../../scr/components/registration_form"

export const registration_form = new RegistrationForm()

describe('Username tests', () => {
    test('Should multiply int numbers', () => {
        expect(registration_form.setUserName('Natalia')).toBe('Natalia')})
    })