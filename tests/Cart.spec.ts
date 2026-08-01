import {test, expect} from "../fixtures";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";

test.describe("Cart page", () => {

    let cartPage : CartPage;
    let checkoutPage : CheckoutPage;

    test.beforeEach(async({dashboardPage}) => {

        await dashboardPage.addFirstItemToCart();
        cartPage = await dashboardPage.clickCartButton();

    });

    test("Remove button removes an item from the cart", async () => {
        await cartPage.clickRemoveButton();
        await expect(cartPage.removeButton).not.toBeVisible();
    });

    test("Continue shopping button works correctly", async({dashboardPage}) => {
        const cartCounterStart = await dashboardPage.cartCounter.textContent() ?? "";
        await cartPage.clickContinueShoppingButton();
        await expect(dashboardPage.cartCounter).toHaveText(cartCounterStart);
    });

    test("Checkout button redirects to the checkout page", async() => {
        checkoutPage = await cartPage.clickCheckoutButton();
        await expect(checkoutPage.checkoutTitle).toHaveText("Checkout: Your Information");
    })

})