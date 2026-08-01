import { test, expect} from "../fixtures";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { checkoutUsers } from "../fixtures/CheckoutUsers";
import { CheckoutOverviewPage } from "../pages/CheckoutOverviewPage";
import { checkoutErrorMessage } from "../fixtures/ErrorMessages";
import { CheckoutCompletePage } from "../pages/CheckoutCompletePage";

test.describe("Checkout page - Personal Info", () => {


    let cartPage : CartPage;
    let checkoutPage : CheckoutPage;
    let checkoutOverviewPage : CheckoutOverviewPage; 

    test.beforeEach(async ({dashboardPage}) => {

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
        await expect(cartPage.yourCartTitle).toHaveText("Your Cart");
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

test.describe("Checkout page - Overview", () => {

    let cartPage : CartPage;
    let checkoutPage : CheckoutPage;
    let checkoutOverviewPage : CheckoutOverviewPage; 
    let checkoutCompletePage : CheckoutCompletePage;

    test.beforeEach(async ({dashboardPage}) => {

        await dashboardPage.addFirstItemToCart();
        cartPage = await dashboardPage.clickCartButton();
        checkoutPage = await cartPage.clickCheckoutButton();
        await checkoutPage.fillPersonalInfo(checkoutUsers.firstName, checkoutUsers.lastName, checkoutUsers.postalCode);
        checkoutOverviewPage = await checkoutPage.clickContinueButton();
    });

    test("Finish button leads to Checkout Complete page", async () => {
        checkoutCompletePage = await checkoutOverviewPage.clickFinishButton();
        await expect.soft(checkoutCompletePage.checkoutCompletePageTitle).toHaveText("Checkout: Complete!");
        await expect(checkoutCompletePage.checkoutCompleteMessage).toHaveText("Thank you for your order!");

    })

    test("Cancel button leads to the Dashboard without removing items from the cart", async({dashboardPage}) => {
        const cartCounterStart = await checkoutOverviewPage.cartCounter.textContent() ?? "";
        await checkoutOverviewPage.clickCancelButton();
        await expect(dashboardPage.logoLocator).toBeVisible();
        await expect(dashboardPage.cartCounter).toHaveText(cartCounterStart);

    });

    test("Total price is calculated correctly", async () => {
        const subtotal = await checkoutOverviewPage.getSubTotal();
        const tax = await checkoutOverviewPage.getTax();
        const total = await checkoutOverviewPage.getTotal();
        expect(subtotal + tax).toBeCloseTo(total);

    })

})


      