import { Page, Locator} from "@playwright/test";
import { DashboardPage } from "./DashboardPage";
import { BasePage } from "./BasePage";

export class CheckoutCompletePage extends BasePage{
    
    readonly checkoutCompletePageTitle: Locator;
    readonly checkoutCompleteMessage: Locator;
    readonly backHomeButton: Locator;
    

    constructor(page: Page){
        super(page);
        this.checkoutCompletePageTitle = page.locator('[data-test="title"]');
        this.checkoutCompleteMessage = page.locator('[data-test="complete-header"]')
        this.backHomeButton = page.locator('[data-test="back-to-products"]');
        
    }

    async clickBackHomeButton(){
        await this.backHomeButton.click();
        return new DashboardPage(this.page);

    }
            
};