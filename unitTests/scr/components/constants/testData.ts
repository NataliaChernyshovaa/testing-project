import Randomstring from "randomstring"
import { randomEmailBodyLengs, randomPasswordLengs, randomUserNameLength } from "./lengthConstants";

// Random UserName data

export const valiUserName = Randomstring.generate({
    length: randomUserNameLength,
    charset: 'alphabetic',
  })

const cyrillicPool = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
export const notLatinUserName = Randomstring.generate({
    length: randomUserNameLength,
    charset: cyrillicPool,
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
    charset: cyrillicPool,
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

export const validPassword = Randomstring.generate({
    length: randomPasswordLengs,
    charset: symbols + uppercaseLetters + digits + lowercaseLetters
  });

export const missingSymbolPassword = Randomstring.generate({
      length: randomPasswordLengs,
      charset: uppercaseLetters + digits + lowercaseLetters
    });

export const lowerCasePassword = Randomstring.generate({
        length: randomPasswordLengs,
        charset: symbols + digits + lowercaseLetters
    });

export const missingNumberPassword = Randomstring.generate({
        length: randomPasswordLengs,
        charset: symbols + uppercaseLetters + lowercaseLetters
    });

