import Randomstring from 'randomstring';

// Base URL
export const baseUrl = 'https://tattoolog.pl'
export const instagramUrl = 'https://www.instagram.com/tattoolog_eu/'

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

// Navigation Items
export const navigationItemsEn = ['ARTIST', 'STUDIO', 'FESTIVALS', 'BLOG', 'PARTNERS', 'CONTACTS']

// Partners Title
export const bioTaTumTitle = 'bioTaTum Professional'

// ErrorLoginMessage
export const errorLoginMessage = 'Nie znaleziono aktywnego konta z podanymi danymi logowania'

// BlogPage buttons text
export const learnMoreButtonTextPolish = 'Dowiedz się więcej'

