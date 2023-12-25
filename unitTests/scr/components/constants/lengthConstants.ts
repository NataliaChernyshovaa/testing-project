const minUserNameLength = 2
const maxUserNameLength = 15
export const randomUserNameLength = Math.floor(Math.random() * (maxUserNameLength - minUserNameLength + 1)) + minUserNameLength;

const minEmailBodyLength = 5
const maxEmailBodyLength = 15
export const randomEmailBodyLengs = Math.floor(Math.random() * (maxEmailBodyLength - minEmailBodyLength + 1)) + minEmailBodyLength;

const minPasswordLength = 8
const maxPasswordLength = 15
export const randomPasswordLenths = Math.floor(Math.random() * (maxPasswordLength - minPasswordLength + 1)) + minPasswordLength;