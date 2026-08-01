import {test, expect} from "../fixtures";
import { DashboardPage } from "../pages/DashboardPage";
import { dropdownOptions } from "../fixtures/DropdownOptions";



test.describe("Dashboard page", () => {
    
    let dashboardPage: DashboardPage

test.beforeEach(async ({ dashboardPage: fixture }) => {
    dashboardPage = fixture
})

    test("Product card displays name, price and image", async () => {
        const count = await dashboardPage.inventoryItem.count();

        for (let i = 0; i < count; i++ ){
            const product = dashboardPage.inventoryItem.nth(i);
            await expect.soft(product.locator(dashboardPage.productName)).toBeVisible();
            await expect.soft(product.locator(dashboardPage.productPrice)).toBeVisible();
            await expect.soft(product.locator(dashboardPage.productImage)).toBeVisible();
            
        };

    });

    test("Sorting by price works correctly", async () => {

        // Suitable for small datasets. For larger datasets, 
        // representative sampling or API-level verification 
        // would be more appropriate.

        await dashboardPage.selectSortingOption(dropdownOptions.priceLowToHigh.value);
        const prices = (await dashboardPage.productPrice.allTextContents()).map(price => Number(price.replace("$", "")));
        for (let i = 1; i < prices.length; i++){
            expect(prices[i]).toBeGreaterThanOrEqual(prices[i - 1]);
            };
        });

    test("Add to Cart button updates cart icon counter and changes the button to Remove", async () => {
        await dashboardPage.addFirstItemToCart();
        await expect.soft(dashboardPage.cartCounter).toHaveText("1");
        await expect(dashboardPage.addToCart.first()).toHaveText("Remove");
    });

    
    test("Click on product redirects to correct product page", async () => {
        const productPrice = await dashboardPage.productPrice.first().textContent() ?? "";
        const productName = await dashboardPage.productName.first().textContent() ?? "";
        const itemPage = await dashboardPage.clickFirstInventoryItem();
        await expect.soft(itemPage.productPrice).toHaveText(productPrice);
        await expect(itemPage.productName).toHaveText(productName);

      
    });

    test("Click on Cart icon redirects to Cart page", async() => {
        const cartPage = await dashboardPage.clickCartButton();
        await expect.soft(cartPage.yourCartTitle).toBeVisible();
        await expect(cartPage.checkoutButton).toBeVisible();
        

    });

});
