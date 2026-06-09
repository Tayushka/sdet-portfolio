interface ErrorMessageText {
    message: string
};

export const errorMessageText : Record<string, ErrorMessageText> = {
    lockedOutUser: {
        message: "Epic sadface: Sorry, this user has been locked out."
    }
};