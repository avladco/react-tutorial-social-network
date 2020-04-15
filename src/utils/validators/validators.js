export const required = value => {
    if (value) return undefined;
    return "Field is required";
};

export const maxLength = (maxLength) => value => {      // thunk creator
    if (value && value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
};

export const minLength = (minLength) => value => {      // thunk creator
    if (value && value.length < minLength) return `Requires minimum ${minLength} symbols`;
    return undefined;
};
