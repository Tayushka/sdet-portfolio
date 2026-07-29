import { Page, Locator} from "@playwright/test";
import { DashboardPage } from "./DashboardPage";
import { CheckoutPage } from "./CheckoutPage";

export class CartPage {
    readonly page: Page;
    readonly yourCartLink : Locator;
    readonly checkoutButton : Locator;
    readonly removeButton : Locator;
    readonly continueShoppingButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.yourCartLink = page.locator('[data-test="title"]');
        this.checkoutButton = page.locator('[data-test="checkout"]');
        this.removeButton = page.locator('.btn.btn_secondary.btn_small.cart_button');
        this.continueShoppingButton = page.locator('[data-test="continue-shopping"]')
    }

    async clickRemoveButton(){
        await this.removeButton.click();
        return this;

    };

    async clickContinueShoppingButton(){
        await this.continueShoppingButton.click();
        return new DashboardPage(this.page);
    };

    async clickCheckoutButton(){
        await this.checkoutButton.click();
        return new CheckoutPage(this.page);
    }


};