import { emptyEmailError, emptyPasswordError, emptyUserNameError,  lowerCasePasswordError, missingAtError, missingDotError, missingNumberError, missingSymbolError, notLatinEmailError, notLatinUserNameError, userNameContainsNumberError } from './constants/errorMessages';
import { digitRegex, latinAlphabetRegex, symbolRegex, uppercaseRegex } from './constants/regularExpressions';



export class RegistrationForm {
  constructor () {}

  public setUserName (userName: string): string {
    if (userName.length === 0) { throw new Error(emptyUserNameError) }
    if (digitRegex.test(userName)) { throw new Error(userNameContainsNumberError) }
    if (!latinAlphabetRegex.test(userName)) { throw new Error(notLatinUserNameError) }
    return userName
  }

  public setEmail (email: string): string {
    if (email.length === 0) { throw new Error(emptyEmailError) }
    if (!email.includes('@')) { throw new Error(missingAtError) }
    if (!email.includes('.')) { throw new Error(missingDotError) }
    if (!latinAlphabetRegex.test(email)) { throw new Error(notLatinEmailError) }
    return email
  }

  public setPassword (password: string): string {
    if (password.length === 0) { throw new Error(emptyPasswordError) }
    if (!symbolRegex.test(password)) { throw new Error(missingSymbolError) }
    if (!uppercaseRegex.test(password)) { throw new Error(lowerCasePasswordError)}
    if (!digitRegex.test(password)) { throw new Error(missingNumberError)}
    return password
  }
}
