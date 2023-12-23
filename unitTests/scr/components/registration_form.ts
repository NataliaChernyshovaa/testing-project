import { emailIsEmpty, emailIsNotLatin, latinAlphabetRegex, missingAt, missingDot, userNameContainsNumber, userNameIsEmpty, userNameIsNotLatin } from './constants/errorMessages';

export class RegistrationForm {
  constructor () {}

  public setUserName (userName: string): string {
    if (/\d/.test(userName)) { throw new Error(userNameContainsNumber) }
    if (userName.length === 0) { throw new Error(userNameIsEmpty) }
    if (!latinAlphabetRegex.test(userName)) { throw new Error(userNameIsNotLatin) }
    return userName
  }

  public setEmail (email: string): string {
    if (!email.includes('@')) { throw new Error(missingAt) }
    if (!email.includes('.')) { throw new Error(missingDot) }
    if (!latinAlphabetRegex.test(email)) { throw new Error(emailIsNotLatin) }
    if (email.length === 0) { throw new Error(emailIsEmpty) }
    return email
  }
}