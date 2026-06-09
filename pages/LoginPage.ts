import {Page, Locator} from "@playwright/test";
import { DashboardPage } from "./DashboardPage";

export class LoginPage {

    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('[data-test="username"]');
        this.passwordInput = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
        this.errorMessage = page.locator('[data-test="error"]');
            
    }

    async visit() {
        await this.page.goto("/");
    }

    private async fillCredentials(username : string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async logIn(username: string, password: string) {
        await this.fillCredentials(username, password);
        return new DashboardPage(this.page);
    };

    async logInFailed(username : string, password : string) {
        await this.fillCredentials(username, password);
        return this;
    };


};