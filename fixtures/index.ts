import {test as base} from "@playwright/test";
import { DashboardPage } from "../pages/DashboardPage";
import { LoginPage } from "../pages/LoginPage";
import { users } from "./Users";
import { CartPage } from "../pages/CartPage";

type MyFixtures = {
    dashboardPage : DashboardPage;
    cartPage : CartPage;
};

export const test = base.extend<MyFixtures>({
    dashboardPage: async ({page}, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.visit();
        const dashboardPage = await loginPage.logIn(
            users.standardUser.username, 
            users.standardUser.password
        );
        await use(dashboardPage);

        
    },

    cartPage: async({dashboardPage}, use) => {
        await dashboardPage.addFirstItemToCart();
        const cartPage = await dashboardPage.clickCartButton();
        await use(cartPage);
    }


});

export {expect} from "@playwright/test";