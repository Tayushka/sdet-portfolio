import {Page, Locator} from "@playwright/test";

export class BasePage {
    readonly page : Page;
    readonly logoLocator : Locator;
    readonly cartButton : Locator;
    readonly cartCounter: Locator;
    readonly burgerMenuButton : Locator;

    constructor(page : Page){
        this.page = page;
        this.logoLocator = page.locator('.app_logo');
        this.cartButton = page.locator('[data-test="shopping-cart-link"]');
        this.cartCounter = page.locator('[data-test="shopping-cart-badge"]');
        this.burgerMenuButton = page.locator('#react-burger-menu-btn');

    }

    // Navigation methods like clickCartButton() are kept in individual
    // page classes to avoid circular dependencies with BasePage
};

