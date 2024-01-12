import { symbols, uppercaseLetters, digits, lowercaseLetters, minPasswordLenght, randomMailBody, emailDomen } from './constants';
import Randomstring from 'randomstring';

// Randomly generated values for registration form test

export const randomName = Randomstring.generate({ length: 10, charset: 'alphabetic' })
export const randomSurname = Randomstring.generate({ length: 10, charset: 'alphabetic' })
export const randomEmail = `${randomMailBody}${emailDomen}`
export const randomPassword =
  [
    Randomstring.generate({ length: 1, charset: symbols }),
    Randomstring.generate({ length: 1, charset: uppercaseLetters }),
    Randomstring.generate({ length: 1, charset: digits }),
    Randomstring.generate({ length: 1, charset: lowercaseLetters }),
    Randomstring.generate({ length: minPasswordLenght, charset: symbols + uppercaseLetters + digits + lowercaseLetters })
  ].join('');
