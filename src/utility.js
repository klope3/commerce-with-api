import { creditCardTypes } from "./constants";
import { formattingFunctions } from "./formatters";
import { validationFunctions } from "./validation";

export const getCardType = numberString => {
    for (const cardType of creditCardTypes) {
        if (numberString.startsWith(cardType.start)) return cardType.type;
    }
    return undefined;
}

export const numberArray = (first, last) => {
    const array = [];
    for (let i = first; i <= last; i++) {
        array.push(i);
    }
    return array;
}

export const fileSizeToString = kilobytes => `${kilobytes <= 999 ? kilobytes + " KB" : (kilobytes / 100).toFixed(2) + " MB"}`;

export const formatCamelCase = str => str.replace(/([A-Z])/, " $1");

export const changeComponentField = (component, event) => {
    const { name: sender, value } = event.target;
    const valToSet = formattingFunctions[sender] ? formattingFunctions[sender](value) : value;
    component.setState(prevState => ({
        ...prevState,
        [sender]: valToSet,
    }));
}

export const blurComponentField = (component, event) => {
    const { name: sender, value } = event.target;
    component.setState(prevState => ({
        ...prevState,
        errors: {
            ...prevState.errors,
            [sender]: validationFunctions[sender] ? validationFunctions[sender](value) : undefined,
        },
    }));
}

export const validateAllComponentFieldValues = (component, fieldValues) => {
    const newErrors = {};
    let errorFound = false;
    for (const key in fieldValues) {
        const error = validationFunctions[key] ? validationFunctions[key](fieldValues[key]) : undefined;
        if (error) errorFound = true;
        newErrors[key] = error;
    }
    component.setState(prevState => ({
        ...prevState,
        errors: newErrors,
    }));
    return !errorFound;
}

export const calculateCartTotal = (cart, products) => {
    return Object.keys(cart).reduce((accum, cartKey) => {
        return accum + products.find(product => product.name === cartKey).price.raw * cart[cartKey];
    }, 0)
}