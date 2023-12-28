import { emptyEmailError, emptyPasswordError, emptyUserNameError,  lowerCasePasswordError, missingAtError, missingDotError, missingNumberError, missingSymbolError, notLatinEmailError, notLatinUserNameError, submitError, userNameContainsNumberError } from './constants/errorMessages';
import { digitRegex, latinAlphabetRegex, symbolRegex, uppercaseRegex } from './constants/regularExpressions';



export class RegistrationForm {

  public userName: string = '';
  public email: string = '';
  public password: string = '';
  private errors: string[] = [];

  public setUserName(userName: string): void {
    this.userName = userName
    if (userName.length === 0) { 
      this.errors.push(emptyUserNameError)
     }

    if (digitRegex.test(userName)) { 
      this.errors.push(userNameContainsNumberError)
     }

    if (!latinAlphabetRegex.test(userName)) { 
      this.errors.push(notLatinUserNameError)
    }
  }

  public setEmail (email: string): void {
    this.email = email
    if (email.length === 0) { 
      this.errors.push(emptyEmailError)
     }
    if (!email.includes('@')) { 
      this.errors.push(missingAtError)
    }
    if (!email.includes('.')) { 
      this.errors.push(missingDotError)
    }
    if (!latinAlphabetRegex.test(email)) { 
      this.errors.push(notLatinEmailError)
     }
  }

  public setPassword (password: string): void {
    this.password = password
    if (password.length === 0) { 
      this.errors.push(emptyPasswordError)
    }
    if (!symbolRegex.test(password)) { 
      this.errors.push(missingSymbolError)
    }
    if (!uppercaseRegex.test(password)) { 
      this.errors.push(lowerCasePasswordError)
    }
    if (!digitRegex.test(password)) { 
      this.errors.push(missingNumberError)
    }
  }

  private isFormValid(): boolean {
    return (
      this.userName.length > 0 &&
      this.email.length > 0 &&
      this.password.length > 0 &&
      !digitRegex.test(this.userName) &&
      latinAlphabetRegex.test(this.userName) &&
      this.email.includes('@') &&
      this.email.includes('.') &&
      latinAlphabetRegex.test(this.email) &&
      symbolRegex.test(this.password) &&
      uppercaseRegex.test(this.password) &&
      digitRegex.test(this.password)
    );
  }

  public submit(): void {
    if (this.isFormValid()) {
      console.log("Registration successful!");
    } else {
      throw new Error(this.errors.join('\n'));
    }
  }
}
