import { Page, Locator} from "@playwright/test";

export class CartPage {
    readonly page: Page;
    readonly yourCartLink : Locator;
    readonly checkoutButton : Locator;

    constructor(page: Page){
        this.page = page;
        this.yourCartLink = page.locator('[data-test="title"]');
        this.checkoutButton = page.locator('[data-test="checkout"]');
    }
};