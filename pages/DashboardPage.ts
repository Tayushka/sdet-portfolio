import { Page, Locator } from "@playwright/test";

export class DashboardPage {
    readonly page: Page;
    readonly logoLocator: Locator

    constructor(page: Page) {
        this.page = page;
        this.logoLocator = page.locator(".app_logo");
    }
}
