import randomstring from 'randomstring';

export const userNameLatin = randomstring.generate({ length: 10, charset: 'alphabetic' });

const emailDomen = '@gmail.com'
const randomMailBody = randomstring.generate(10)
export const randomEmail = `${randomMailBody}${emailDomen}`

export const password = randomstring.generate({ length: 8, charset: 'numeric' })