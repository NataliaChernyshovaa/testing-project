
import { userNameContainsNumberError, userNameIsEmpty, userNameIsNotLatin } from './constants';

export class RegistrationForm {
  constructor () {}

  public setUserName (userName: string) {
    switch (true) {
      case /\d/.test(userName):
        throw new Error(userNameContainsNumberError);
      case userName.length === 0:
        throw new Error(userNameIsEmpty);
      case /^[a-zA-Z]+$/.test(userName):
        throw new Error(userNameIsNotLatin)
      default: return userName
    }
  }
}