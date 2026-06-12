import { Page, Locator} from "@playwright/test";

export class ItemPage {
    readonly page : Page;
    readonly productName : Locator;
    readonly backToProductsLink : Locator;
    readonly productPrice : Locator;

    constructor(page: Page) {
        this.page = page;
        this.productName = page.locator('[data-test="inventory-item-name"]');
        this.backToProductsLink = page.locator('[data-test="back-to-products"]');
        this.productPrice = page.locator('[data-test="inventory-item-price"]');
    }
};