import { Page, Locator} from "@playwright/test";
import { CheckoutCompletePage } from "./CheckoutCompletePage";
import { DashboardPage } from "./DashboardPage";

export class CheckoutOverviewPage {
    readonly page: Page;
    readonly checkoutOverviewPageTitle: Locator;
    readonly finishButton: Locator;
    readonly cancelButton: Locator;
    readonly subTotalLabel: Locator;
    readonly taxLabel: Locator;
    readonly totalLabel: Locator;
    

    constructor(page: Page){
        this.page = page;
        this.checkoutOverviewPageTitle = page.locator('[data-test="title"]');
        this.finishButton = page.locator('[data-test="finish"]');
        this.cancelButton = page.locator('[data-test="cancel"]');
        this.subTotalLabel = page.locator('[data-test="subtotal-label"]');
        this.taxLabel = page.locator('[data-test="tax-label"]');
        this.totalLabel = page.locator('[data-test="total-label"]');
        
    }

    async clickFinishButton(){
        await this.finishButton.click();
        return new CheckoutCompletePage(this.page);

    }

    async clickCancelButton(){
        await this.cancelButton.click();
        return new DashboardPage(this.page);
    }

    async getSubTotal(){
        const text = await this.subTotalLabel.textContent() ?? "";
        return Number(text.split("$")[1]);
    }

    async getTax(){
        const text = await this.taxLabel.textContent() ?? "";
        return Number(text.split("$")[1]);
    }

    async getTotal(){
        const text = await this.totalLabel.textContent() ?? "";
        return Number(text.split("$")[1]);
    }
            
};