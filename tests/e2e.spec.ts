import {test, expect} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
import { CartPage } from "../pages/CartPage";
import { users } from "../fixtures/Users";
import { CheckoutPage } from "../pages/CheckoutPage";
import { checkoutUsers } from "../fixtures/CheckoutUsers";
import { CheckoutOverviewPage } from "../pages/CheckoutOverviewPage";
import {checkoutErrorMessage} from "../fixtures/ErrorMessages";
import { CheckoutCompletePage } from "../pages/CheckoutCompletePage";

test.describe("E2E Cart flow", () => {

    test("Buy two first products", async() => {
        
    })

});