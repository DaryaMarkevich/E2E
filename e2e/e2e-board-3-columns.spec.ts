import {test, expect} from "@playwright/test" ;
import { LoginPage } from "../../page-objects/LoginPage";
import { MyBoardsPage } from "../../page-objects/MyBoardsPage";

test.describe.parallel("Work With 3 Columns Board", () => {
    test.beforeEach(async ( { page }) => {
        let loginPage: LoginPage ;
        let myBoardsPage: MyBoardsPage ;
        loginPage = new LoginPage(page) ; 
        myBoardsPage = new MyBoardsPage(page) ;
        await loginPage.visitMyRetro() ;
        await loginPage.login("darya.markevich.04@inbox.ru", "grnqgfpmoInxaJyrXco8") ;

        await myBoardsPage.fillNewBoardForm("Test Project", 3, "Good - Bad - Actions") ;
        await myBoardsPage.clickstartRetroButton() ;
        await expect(page) .toHaveURL(/board/) ;
    }) ;

    test.afterEach(async ({page}) => {
        await page.goto("/") ;

        const deleteButton = page.locator(".row.content > div:nth-child(2)").getByText("DELETE") ;
        await deleteButton.click() ;
        await page.getByRole("button", {name: "Yes"}) ;
    }) ;

    test("Add New Card in Good Column", async ({ page }) => {
        await page.getByRole("button", {name: "Good"}).click() ;
        await page.type(".row .content", "Test Content") ; 
        await page.keyboard.press("Enter") ;

        const cardContent = page.locator(".row .content") ;
        await expect(cardContent) .toHaveText("Test Content") ;

    }) ;

}) ;