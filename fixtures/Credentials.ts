interface Credentials {
    username: string;
    password: string;
};

export const credentials : Record<string, Credentials> = {

incorrectUsername: {
    username: "wrong_username",
    password: "secret_sauce"
},

incorrectPassword: {
    username: "standard_user",
    password: "secret"
},

emptyUsername: {
    username: "",
    password: "secret"
},

emptyPassword: {
    username: "standard_user",
    password: ""
},

emptyFields: {
    username: "",
    password: ""
}

}