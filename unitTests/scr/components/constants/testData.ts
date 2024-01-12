import Randomstring from 'randomstring'
import { randomEmailBodyLengs, randomPasswordLenths, randomUserNameLength } from './lengthConstants';

export const emptyString = ''

// Random UserName data

export const validUserName = Randomstring.generate({
  length: randomUserNameLength,
  charset: 'alphabetic'
})

const cyrillicPool = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
export const notLatinUserName = Randomstring.generate({
  length: randomUserNameLength,
  charset: cyrillicPool
})

export const numbersInsideUserName = Randomstring.generate({
  length: randomUserNameLength,
  charset: 'numeric'
});

// Email domens

const validEmailDomen = '@gmail.com'
const missingAtEmailDomen = 'gmail.com'
const missingDotEmailDomen = '@gmailcom'

// Email bodies

const randomMailBody = Randomstring.generate({
  length: randomEmailBodyLengs,
  charset: 'alphabetic'
})
const randomMailBodyCyryllic = Randomstring.generate({
  length: randomEmailBodyLengs,
  charset: cyrillicPool
})

// Random Email data

export const validEmail = `${randomMailBody}${validEmailDomen}`
export const noAtEmail = `${randomMailBody}${missingAtEmailDomen}`
export const noDotEmail = `${randomMailBody}${missingDotEmailDomen}`
export const noLatinEmail = `${randomMailBodyCyryllic}${validEmailDomen}`

// Random Password data

const digits = '0123456789';
const symbols = '#$%^&!+*-';
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export const validPassword =
  [
    Randomstring.generate({ length: 1, charset: symbols }),
    Randomstring.generate({ length: 1, charset: uppercaseLetters }),
    Randomstring.generate({ length: 1, charset: digits }),
    Randomstring.generate({ length: 1, charset: lowercaseLetters }),
    Randomstring.generate({ length: randomPasswordLenths - 4, charset: symbols + uppercaseLetters + digits + lowercaseLetters })
  ].join('');

export const missingSymbolPassword = [
  Randomstring.generate({ length: 1, charset: uppercaseLetters }),
  Randomstring.generate({ length: 1, charset: digits }),
  Randomstring.generate({ length: 1, charset: lowercaseLetters }),
  Randomstring.generate({ length: randomPasswordLenths - 4, charset: uppercaseLetters + digits + lowercaseLetters })
].join('')

export const lowerCasePassword = [
  Randomstring.generate({ length: 1, charset: symbols }),,
  Randomstring.generate({ length: 1, charset: digits }),
  Randomstring.generate({ length: 1, charset: lowercaseLetters }),
  Randomstring.generate({ length: randomPasswordLenths - 4, charset: symbols + digits + lowercaseLetters })
].join('')

export const missingNumberPassword = [
  Randomstring.generate({ length: 1, charset: symbols }),
  Randomstring.generate({ length: 1, charset: uppercaseLetters }),
  Randomstring.generate({ length: 1, charset: lowercaseLetters }),
  Randomstring.generate({ length: randomPasswordLenths - 4, charset: symbols + uppercaseLetters + lowercaseLetters })
].join('')
