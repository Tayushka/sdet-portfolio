import {test, expect} from "../fixtures";

test.describe("Cart page", () => {

    test("Remove button removes an item from the cart", async ({cartPage}) => {
        await cartPage.clickRemoveButton();
        await expect(cartPage.removeButton).not.toBeVisible();
    });

    test("Continue shopping button works correctly", async({cartPage, dashboardPage}) => {
        const cartCounterStart = await dashboardPage.cartCounter.textContent() ?? "";
        await cartPage.clickContinueShoppingButton();
        await expect(dashboardPage.cartCounter).toHaveText(cartCounterStart);
    });

    test("Checkout button redirects to the checkout page", async({cartPage}) => {
        const checkoutPage = await cartPage.clickCheckoutButton();
        await expect(checkoutPage.checkoutTitle).toHaveText("Checkout: Your Information");
    })

})