import {test, expect} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { users } from "../fixtures/Users";
import { checkoutUsers } from "../fixtures/CheckoutUsers";


test.describe("E2E Cart flow", () => {


    test("User can successfully complete an order", async({page}) => {

        const loginPage = new LoginPage(page);
        await loginPage.visit();
        const dashboardPage = await loginPage.logIn(users.standardUser.username, users.standardUser.password);

        await expect.soft(dashboardPage.logoLocator).toBeVisible();

        await dashboardPage.addFirstItemToCart();

        await expect.soft(dashboardPage.cartCounter).toHaveText("1");

        const cartPage = await dashboardPage.clickCartButton();
        const checkoutPage = await cartPage.clickCheckoutButton();
        await checkoutPage.fillPersonalInfo(checkoutUsers.firstName, checkoutUsers.lastName, checkoutUsers.postalCode);
        const checkoutOverviewPage = await checkoutPage.clickContinueButton();
        const checkoutCompletePage = await checkoutOverviewPage.clickFinishButton();

        await expect.soft(checkoutCompletePage.checkoutCompletePageTitle).toHaveText("Checkout: Complete!");
        await expect.soft(checkoutCompletePage.checkoutCompleteMessage).toHaveText("Thank you for your order!");

        await checkoutCompletePage.clickBackHomeButton();

        await expect (dashboardPage.logoLocator).toBeVisible();
    
    })

});