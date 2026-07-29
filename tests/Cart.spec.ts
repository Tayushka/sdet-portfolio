import {test, expect} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
import { CartPage } from "../pages/CartPage";
import { users } from "../fixtures/Users";
import { dropdownOptions } from "../fixtures/DropdownOptions";
import { CheckoutPage } from "../pages/CheckoutPage";

test.describe("Cart page", () => {

    let dashboardPage : DashboardPage;
    let cartPage : CartPage;
    let checkoutPage : CheckoutPage;

    test.beforeEach(async({page}) => {

        const loginPage = new LoginPage(page);
        await loginPage.visit();
        dashboardPage = await loginPage.logIn(users.standardUser.username, users.standardUser.password);
        await dashboardPage.addFirstItemToCart();
        cartPage = await dashboardPage.clickCartButton();

    });

    test("Remove button removes an item from the cart", async () => {
        await cartPage.clickRemoveButton();
        await expect(cartPage.removeButton).not.toBeVisible();
    });

    test("Continue shopping button works correctly", async() => {
        const cartCounterStart = await dashboardPage.cartCounter.textContent() ?? "";
        await cartPage.clickContinueShoppingButton();
        await expect(dashboardPage.cartCounter).toHaveText(cartCounterStart);
    });

    test("Checkout button redirects to the checkout page", async() => {
        checkoutPage = await cartPage.clickCheckoutButton();
        await expect(checkoutPage.checkoutTitle).toHaveText("Checkout: Your Information");
    })

})