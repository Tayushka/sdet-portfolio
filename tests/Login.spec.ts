import {test, expect} from "@playwright/test";

import { users } from "../fixtures/Users";
import { LoginPage } from "../pages/LoginPage";

test.describe("Login Page", () => {

    test("Log In with correct credentials", async ( {page} ) => {

        const loginPage = new LoginPage(page);
        await loginPage.visit();

        const dashboardPage = await loginPage.logIn(users.standardUser.username, users.standardUser.password);
        await expect(dashboardPage.logoLocator).toBeVisible();
          
    });
});