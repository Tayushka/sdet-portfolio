import { Page, Locator} from "@playwright/test";
import { BasePage } from "./BasePage";

export class ItemPage extends BasePage {
    readonly productName : Locator;
    readonly backToProductsLink : Locator;
    readonly productPrice : Locator;

    constructor(page: Page) {
        super(page);
        this.productName = page.locator('[data-test="inventory-item-name"]');
        this.backToProductsLink = page.locator('[data-test="back-to-products"]');
        this.productPrice = page.locator('[data-test="inventory-item-price"]');
    }
};