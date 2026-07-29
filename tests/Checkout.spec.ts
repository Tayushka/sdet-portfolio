import {test, expect} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
import { CartPage } from "../pages/CartPage";
import { users } from "../fixtures/Users";
import { CheckoutPage } from "../pages/CheckoutPage";
import { checkoutUsers } from "../fixtures/CheckoutUsers";
import { CheckoutOverviewPage } from "../pages/CheckoutOverviewPage";
import {checkoutErrorMessage} from "../fixtures/ErrorMessages";

test.describe("Checkout page", () => {

    let dashboardPage : DashboardPage;
    let cartPage : CartPage;
    let checkoutPage : CheckoutPage;
    let checkoutOverviewPage : CheckoutOverviewPage; 

    test.beforeEach(async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.visit();
        dashboardPage = await loginPage.logIn(users.standardUser.username, users.standardUser.password);
        await dashboardPage.addFirstItemToCart();
        cartPage = await dashboardPage.clickCartButton();
        checkoutPage = await cartPage.clickCheckoutButton();    
    });

    test("User proceeds to checkout Overview page with valid user info", async () => {
        await checkoutPage.fillPersonalInfo(checkoutUsers.firstName, checkoutUsers.lastName, checkoutUsers.postalCode);
        checkoutOverviewPage = await checkoutPage.clickContinueButton();
        await expect(checkoutOverviewPage.checkoutOverviewPageTitle).toHaveText("Checkout: Overview")
    });

    test("Cancel button redirects to the cart page", async() => {
        await checkoutPage.clickCancelButton();
        await expect(cartPage.yourCartLink).toHaveText("Your Cart");
    });

    test("Error message for the First Name field", async() => {
        await checkoutPage.fillLastName(checkoutUsers.lastName);
        await checkoutPage.fillPostalCode(checkoutUsers.postalCode);
        await checkoutPage.clickContinueButton();
        await expect(checkoutPage.errorMessage).toHaveText(checkoutErrorMessage.firstNameError.message);
    });

    test("Error message for the Last Name field", async() => {
        await checkoutPage.fillFirstName(checkoutUsers.firstName);
        await checkoutPage.fillPostalCode(checkoutUsers.postalCode);
        await checkoutPage.clickContinueButton();
        await expect(checkoutPage.errorMessage).toHaveText(checkoutErrorMessage.lastNameError.message);
    });

    test("Error message for the Postal Code field", async() => {
        await checkoutPage.fillFirstName(checkoutUsers.firstName);
        await checkoutPage.fillLastName(checkoutUsers.lastName);
        await checkoutPage.clickContinueButton();
        await expect(checkoutPage.errorMessage).toHaveText(checkoutErrorMessage.postalCodeError.message);
    });

});

