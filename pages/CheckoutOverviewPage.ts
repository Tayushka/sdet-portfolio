import { Page, Locator} from "@playwright/test";

export class CheckoutOverviewPage {
    readonly page: Page;
    readonly checkoutOverviewPageTitle: Locator;
    

    constructor(page: Page){
        this.page = page;
        this.checkoutOverviewPageTitle = page.locator('[data-test="title"]');
    }
            
};