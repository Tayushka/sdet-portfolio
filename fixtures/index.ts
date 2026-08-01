import {test as base} from "@playwright/test";
import { DashboardPage } from "../pages/DashboardPage";
import { LoginPage } from "../pages/LoginPage";
import { users } from "./Users";

type MyFixtures = {
    dashboardPage : DashboardPage;
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
        
    }
});

export {expect} from "@playwright/test";