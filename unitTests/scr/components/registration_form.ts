import { emptyEmailError, emptyPasswordError, emptyUserNameError,  lowerCasePasswordError, missingAtError, missingDotError, missingNumberError, missingSymbolError, notLatinEmailError, notLatinUserNameError, submitError, userNameContainsNumberError } from './constants/errorMessages';
import { digitRegex, latinAlphabetRegex, symbolRegex, uppercaseRegex } from './constants/regularExpressions';


export class RegistrationForm {

  public userName: string = '';
  public email: string = '';
  public password: string = '';
  private errors: string[] = [];

  public setUserName(userName: string): void {
    this.userName = userName
  }

  public setEmail (email: string): void {
    this.email = email
  }

  public setPassword (password: string): void {
    this.password = password
  }

  private isFormValid(): boolean {
 
    if (this.userName.length === 0) { 
      this.errors.push(emptyUserNameError)
     }

    if (digitRegex.test(this.userName)) { 
      this.errors.push(userNameContainsNumberError)
     }

    if (!latinAlphabetRegex.test(this.userName)) { 
      this.errors.push(notLatinUserNameError)
    }

    if (this.email.length === 0) { 
      this.errors.push(emptyEmailError)
     }

    if (!this.email.includes('@')) { 
      this.errors.push(missingAtError)
    }

    if (!this.email.includes('.')) { 
      this.errors.push(missingDotError)
    }
    
    if (!latinAlphabetRegex.test(this.email)) { 
      this.errors.push(notLatinEmailError)
     }

    if (this.password.length === 0) { 
      this.errors.push(emptyPasswordError)
    }

    if (!symbolRegex.test(this.password)) { 
      this.errors.push(missingSymbolError)
    }

    if (!uppercaseRegex.test(this.password)) { 
      this.errors.push(lowerCasePasswordError)
    }

    if (!digitRegex.test(this.password)) { 
      this.errors.push(missingNumberError)
    }
    
    return this.errors.length === 0;
  }

  public submit(): void {
    if (this.isFormValid()) {
      console.log("Registration successful!");
    } else {
      throw new Error(this.errors.join('\n'));
    }
  }
}
