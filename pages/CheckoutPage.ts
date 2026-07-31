import { Page, Locator} from "@playwright/test";
import { CartPage } from "./CartPage";
import { CheckoutOverviewPage } from "./CheckoutOverviewPage";
import { BasePage } from "./BasePage";

export class CheckoutPage extends BasePage {
    
    readonly checkoutTitle: Locator;
    readonly firstName : Locator;
    readonly lastName : Locator;
    readonly postalCode : Locator;
    readonly cancelButton : Locator;
    readonly continueButton : Locator;
    readonly errorMessage : Locator;


    constructor(page: Page){
        super(page);
        this.checkoutTitle = page.locator('[data-test="title"]');
        this.firstName = page.locator('[data-test="firstName"]');
        this.lastName = page.locator('[data-test="lastName"]');
        this.postalCode = page.locator('[data-test="postalCode"]');
        this.cancelButton = page.locator('[data-test="cancel"]');
        this.continueButton = page.locator('[data-test="continue"]');
        this.errorMessage = page.locator('[data-test="error"]')
    
    }

    async fillPersonalInfo(firstName : string, lastName : string, postalCode : string){
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.postalCode.fill(postalCode);
        return this;
        
    };

    async fillFirstName(firstName : string){
        await this.firstName.fill(firstName)
        return this;
    }

    async fillLastName(lastName : string){
        await this.lastName.fill(lastName)
        return this;
    }

    async fillPostalCode(postalCode : string){
        await this.postalCode.fill(postalCode)
        return this;
    }

    async clickCancelButton(){
        await this.cancelButton.click();
        return new CartPage(this.page);
    };

    async clickContinueButton(){
        await this.continueButton.click();
        return new CheckoutOverviewPage(this.page);
    }
   
};