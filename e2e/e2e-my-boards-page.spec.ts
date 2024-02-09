import {test, expect} from "@playwright/test" ;
import { LoginPage } from "../../page-objects/LoginPage";
import { MyBoardsPage } from "../../page-objects/MyBoardsPage";

test.describe.parallel("My Boards Page", () => {
    let loginPage: LoginPage ;
    let myBoardsPage: MyBoardsPage ;
    test.beforeEach(async ( { page }) => {
        loginPage = new LoginPage(page) ; 
        myBoardsPage = new MyBoardsPage(page) ;
        await loginPage.visitMyRetro() ;
        await loginPage.login("darya.markevich.04@inbox.ru", "grnqgfpmoInxaJyrXco8") ;
    }) ;

    test("Create New Board With 3 Columns", async ({ page }) => {
        await myBoardsPage.fillNewBoardForm("Test Project", 3, "Good - Bad - Actions") ;
        await myBoardsPage.clickstartRetroButton() ;

        const boardTitle = page.locator("[data-qa=board-project-title]") ;
        await expect(boardTitle) .toHaveText("Test Project") ;

        await expect(page) .toHaveURL(/board/) ;
    }) ;

    test("Create New Board With 4 Columns", async ({ page }) => {
        await myBoardsPage.fillNewBoardForm("Test Project", 4, "Good - Bad - Keep - Actions") ;
        await myBoardsPage.clickstartRetroButton() ;
        const boardTitle = page.locator("[data-qa=board-project-title]") ;
        await expect(boardTitle) .toHaveText("Test Project") ;
        await expect(page) .toHaveURL(/board/) ;
    }) ;

}) ;