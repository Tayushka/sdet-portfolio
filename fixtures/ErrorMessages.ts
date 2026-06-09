interface ErrorMessageText {
    message: string
};

export const errorMessageText : Record<string, ErrorMessageText> = {
    lockedOutUser: {
        message: "Epic sadface: Sorry, this user has been locked out."
    },

    incorrectCredentials: {
        message: "Epic sadface: Username and password do not match any user in this service"
    },

    emptyUsername: {
        message: "Epic sadface: Username is required"
    },

    emptyPassword: {
        message: "Epic sadface: Password is required"
    }

};