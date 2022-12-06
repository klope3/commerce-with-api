import { getCardType } from "./utility";

export const checkLettersOnly = input => /^[a-zA-Z]+$/g.test(input);
export const checkValidPostcode = input => input >= 10000 && input <= 99999;
export const checkValidEmail = input => /^(?:[a-zA-Z\d]+)@(?:[a-zA-Z\d]+)\.(?:[a-zA-Z]{2,})$/g.test(input);
export const checkValidPassword = input => /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+]).{8,20}$/g.test(input);
const hasDigitCount = (string, count) => string.replace(/[^\d]/g, "").length === count;
const checkValidFullName = string => {
    const validNameSurname = /^ *[a-zA-Z]+ +[a-zA-Z]+ *$/g.test(string);
    return !validNameSurname ? "Please enter a valid name and surname." : undefined;
}
const emptyInput = inputString => !inputString || !inputString.length;
const validPasswordMessage = "Password must be 8-20 characters, including at least one capital letter, at least one small letter, one number and one special character - !@#$%^&*()_+";

export const paymentValidations = {
    cardNumber: numberString => {
        let noSpaces = numberString.replace(/[^\d]/g, "");
        return noSpaces.length !== 16 ? "The card number must be 16 digits." : undefined;
    }
};

export const validationFunctions = {
    createAccountEmail: string => !checkValidEmail(string) ? "Please enter a valid e-mail address." : undefined,
    createAccountPassword: string => !checkValidPassword(string) ? validPasswordMessage : undefined,
    createAccountFirstName: string => emptyInput(string) || !checkLettersOnly(string) ? "Please enter a valid first name." : undefined,
    createAccountLastName: string => emptyInput(string) || !checkLettersOnly(string) ? "Please enter a valid last name." : undefined,
    createAccountZipCode: numberString => !checkValidPostcode(numberString) ? "Please enter a 5-digit zip code." : undefined,
    //payment
    paymentCardholder: string => checkValidFullName(string),
    paymentCardNumber: numberString => {
        let noSpaces = numberString.replace(/[^\d]/g, "");
        if (noSpaces.length !== 16) return "The card number must be 16 digits.";
        if (!getCardType(noSpaces)) return "Invalid card number.";
        return undefined;
    },
    paymentCardExpiryMonth: value => !value || value === "Month" ? "Please choose a month." : undefined,
    paymentCardExpiryYear: value => !value || value === "Year" ? "Please choose a year." : undefined,
    paymentCardSecurityCode: number => number < 100 || number > 999 ? "Invalid security code." : undefined,
    //shipping
    shippingTitle: string => emptyInput(string) ? "Please enter an address title." : undefined,
    shippingFullName: string => checkValidFullName(string),
    shippingAddress: string => emptyInput(string) ? "Please enter an address." : undefined,
    shippingZip: string => emptyInput(string) ? "Please enter a zip code." : undefined,
    shippingState: string => emptyInput(string) ? "Please enter a state." : undefined,
    shippingCity: string => emptyInput(string) ? "Please enter a city." : undefined,
    shippingCountry: value => !value || value === "Country" ? "Please choose a country." : undefined,
    cellCountryCode: string => emptyInput(string) ? "Please enter a country code." : undefined,
    cellNumber: string => !hasDigitCount(string, 10) ? "Please enter a 10-digit cell number." : undefined,
    telephoneCountryCode: string => emptyInput(string) ? "Please enter a country code." : undefined,
    telephoneNumber: string => !hasDigitCount(string, 10) ? "Please enter a 10-digit telephone number." : undefined,
}