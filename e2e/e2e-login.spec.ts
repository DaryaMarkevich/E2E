import {test, expect} from "@playwright/test" ;
import { LoginPage } from "../../page-objects/LoginPage";

test.describe("Login and Logout", () => {
    let loginPage: LoginPage ; 

test.beforeEach(async ( { page }) => {
    loginPage = new LoginPage(page) ; 
    await loginPage.visitMyRetro() ;
}) ;

test("Login with invalid credentials", async ( { page }) => {
    await loginPage.login("Wrong email", "Wrong password") ;
    await loginPage.assertErrorMessage() ;
}) ; 

test("Login and Logout with valid credentials", async ({ page }) => {
    await loginPage.login("darya.markevich.04@inbox.ru", "grnqgfpmoInxaJyrXco8") ;

    const headerTitle = page.locator(".blueprint .header .title") ; 
    await expect(headerTitle) .toBeVisible() ;

    await page.click(".col .logout") ;
    
    const signinButton = page.locator(".main .signin") ;
    await expect(signinButton) .toBeVisible() ;
})
})
