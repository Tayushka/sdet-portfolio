import {test, expect} from "@playwright/test";

import { users } from "../fixtures/Users";
import {errorMessageText} from "../fixtures/ErrorMessages";
import { LoginPage } from "../pages/LoginPage";

test.describe("Login Page", () => {

    test("Log In with correct credentials", async ( {page} ) => {

        const loginPage = new LoginPage(page);
        await loginPage.visit();

        const dashboardPage = await loginPage.logIn(users.standardUser.username, users.standardUser.password);
        await expect(dashboardPage.logoLocator).toBeVisible();
          
    });

    test("Log in as a locked out user", async ({page}) => {

        const loginPage = new LoginPage(page);
        await loginPage.visit();
        await loginPage.logInFailed(users.lockedOutUser.username, users.lockedOutUser.password);
        await expect(loginPage.errorMessage).toHaveText(errorMessageText.lockedOutUser.message);
        


    })
});