import {test, expect} from "@playwright/test";

import { users } from "../fixtures/Users";
import {errorMessageText} from "../fixtures/ErrorMessages";
import { LoginPage } from "../pages/LoginPage";
import { credentials } from "../fixtures/Credentials";

test.describe("Login Page", () => {

    let loginPage : LoginPage;

    test.beforeEach(async ( {page} ) => {

        loginPage = new LoginPage(page);
        await loginPage.visit();

    });

    test("Log In with correct credentials", async () => {

        const dashboardPage = await loginPage.logIn(users.standardUser.username, users.standardUser.password);
        await expect(dashboardPage.logoLocator).toBeVisible();
          
    });

    test("Log in as a locked out user", async () => {

        await loginPage.logInFailed(users.lockedOutUser.username, users.lockedOutUser.password);
        await expect(loginPage.errorMessage).toHaveText(errorMessageText.lockedOutUser.message);
        
    });

    test("Log in with incorrect username", async () => {

        await loginPage.logInFailed(credentials.incorrectUsername.username, credentials.incorrectUsername.password);
        await expect (loginPage.errorMessage).toHaveText(errorMessageText.incorrectCredentials.message);
    });

    test("Log in with incorrect password", async () => {

        await loginPage.logInFailed(credentials.incorrectPassword.username, credentials.incorrectPassword.password);
        await expect (loginPage.errorMessage).toHaveText(errorMessageText.incorrectCredentials.message);
    });

    test("Log in with empty username", async () => {

        await loginPage.logInFailed(credentials.emptyUsername.username, credentials.emptyUsername.password);
        await expect (loginPage.errorMessage).toHaveText(errorMessageText.emptyUsername.message);
    });

    test("Log in with empty password", async () => {
        await loginPage.logInFailed(credentials.emptyPassword.username, credentials.emptyPassword.password);
        await expect(loginPage.errorMessage).toHaveText(errorMessageText.emptyPassword.message);
    });

    test("Log in with empty fields", async () => {
        await loginPage.logInFailed(credentials.emptyFields.username, credentials.emptyFields.password);
        await expect(loginPage.errorMessage).toHaveText(errorMessageText.emptyUsername.message);

    });

});