import {test, expect} from "@playwright/test";

import { users } from "../fixtures/Users";
import {errorMessageText} from "../fixtures/ErrorMessages";
import { LoginPage } from "../pages/LoginPage";

test.describe("Login Page", () => {

    let loginPage : LoginPage;

    test.beforeEach(async ( {page} ) => {

        loginPage = new LoginPage(page);
        await loginPage.visit();

    })

    test("Log In with correct credentials", async () => {

        const dashboardPage = await loginPage.logIn(users.standardUser.username, users.standardUser.password);
        await expect(dashboardPage.logoLocator).toBeVisible();
          
    });

    test("Log in as a locked out user", async () => {

        await loginPage.logInFailed(users.lockedOutUser.username, users.lockedOutUser.password);
        await expect(loginPage.errorMessage).toHaveText(errorMessageText.lockedOutUser.message);
        
    })
});