import { Page, Locator} from "@playwright/test";

export class CheckoutPage {
    readonly page: Page;
    readonly checkoutTitle: Locator;

    constructor(page: Page){
        this.page = page;
        this.checkoutTitle = page.locator('[data-test="title"]')

    }
    
};