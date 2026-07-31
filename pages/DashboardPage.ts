import { Page, Locator } from "@playwright/test";
import { ItemPage } from "./ItemPage";
import { CartPage } from "./CartPage";
import { BasePage } from "./BasePage";

export class DashboardPage extends BasePage {
    
    readonly inventoryItem: Locator;
    readonly productName: Locator;
    readonly productPrice: Locator;
    readonly productImage: Locator;
    readonly sortingDropdown: Locator;
    readonly addToCart: Locator;


    constructor(page: Page) {
        super(page);
        
        this.inventoryItem = page.locator('[data-test="inventory-item"]');
        this.productName = page.locator('[data-test="inventory-item-name"]');
        this.productPrice = page.locator('[data-test="inventory-item-price"]');
        this.productImage = page.locator('a .inventory_item_img');
        this.sortingDropdown = page.locator('[data-test="product-sort-container"]');
        this.addToCart = page.locator('.btn_small.btn_inventory');
    }

    async selectSortingOption(option : string) {
        await this.sortingDropdown.selectOption(option);
        return this;
         
    };

    async clickFirstInventoryItem(){
        await this.productName.first().click();
        return new ItemPage(this.page);
    };

    async addFirstItemToCart(){
        await this.addToCart.first().click();
        return this;
    }

    async clickCartButton(){
        await this.cartButton.click();
        return new CartPage(this.page)
    };

};
