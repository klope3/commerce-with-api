const removeNonDigits = string => string.replace(/[^\d]/g, "");
const removeNonLettersNonSpaces = string => string.replace(/[^a-zA-Z ]/g, "");
const formatPhoneNumber = string => {
    let formatted = removeNonDigits(string);
    if (formatted.length) {
        formatted = formatted.substring(0, 10);
        const matches = formatted.match(/.{1,3}/g);
        if (matches.length === 4) {
            matches[2] += matches[3];
            matches.pop();
        }
        formatted = matches.join("-");
    }
    return formatted;
};

export const formattingFunctions = {
    createAccountFirstName: rawString => removeNonLettersNonSpaces(rawString),
    createAccountLastName: rawString => removeNonLettersNonSpaces(rawString),
    createAccountZipCode: rawString => removeNonDigits(rawString),
    paymentCardNumber: rawString => {
        let formatted = removeNonDigits(rawString).substring(0, 16);
        if (formatted.length) {
            formatted = formatted.match(/.{1,4}/g).join(" ");
        }
        return formatted;
    },
    paymentCardholder: rawString => removeNonLettersNonSpaces(rawString),
    paymentCardSecurityCode: rawString => removeNonDigits(rawString),
    shippingZip: rawString => removeNonDigits(rawString),
    shippingState: rawString => removeNonLettersNonSpaces(rawString),
    shippingCity: rawString => removeNonLettersNonSpaces(rawString),
    shippingFullName: rawString => removeNonLettersNonSpaces(rawString),
    shippingCellCountryCode: rawString => removeNonDigits(rawString),
    shippingCellNumber: rawString => formatPhoneNumber(rawString),
    shippingTelephoneCountryCode: rawString => removeNonDigits(rawString),
    shippingTelephoneNumber: rawString => formatPhoneNumber(rawString),
}