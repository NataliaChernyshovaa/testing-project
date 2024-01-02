import Randomstring from 'randomstring';

// Base URL
export const baseUrl = 'https://tattoolog.pl'

// Data for generating random values
    // Email 
export const emailDomen = '@gmail.com'
export const randomMailBody = Randomstring.generate(10)
    // Password
export const minPasswordLenght = 8
export const digits = '0123456789';
export const symbols = '#$%^&!+*-';
export const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
export const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Messages after creating an account successfully 
export const confirmingMessage = 'Na twój adres e-mail został wysłany e-mail'
export const furtherInstructionmessage = 'Postępuj zgodnie z instrukcjami w e-mailu, aby zakończyć rejestrację'