import Randomstring from "randomstring"

// Random UserName data

export const valiUserName = Randomstring.generate({
    length: 15,
    charset: 'alphabetic',
  })

const cyrillicPool = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
export const notLatinUserName = Randomstring.generate({
    length: 15,
    charset: cyrillicPool,
  })

  export const numbersInsideUserName = Randomstring.generate({
    length: 15,
    charset: 'numeric'
  });

// Email domens 

const validEmailDomen = '@gmail.com'
const missingAtEmailDomen = 'gmail.com'
const missingDotEmailDomen = '@gmailcom'

// Email bodies

const randomMailBody = Randomstring.generate({
    length: 10,
    charset: 'alphabetic'
  })
const randomMailBodyCyryllic = Randomstring.generate({
    length: 10,
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
    length: 12,
    charset: symbols + uppercaseLetters + digits + lowercaseLetters
  });

export const missingSymbolPassword = Randomstring.generate({
      length: 12,
      charset: uppercaseLetters + digits + lowercaseLetters
    });

export const lowerCasePassword = Randomstring.generate({
        length: 12,
        charset: symbols + digits + lowercaseLetters
    });

export const missingNumberPassword = Randomstring.generate({
        length: 12,
        charset: symbols + uppercaseLetters + lowercaseLetters
    });

