import {test, expect} from "@playwright/test" ;
import { LoginPage } from "../../page-objects/LoginPage";
import { BoardPage } from "../../page-objects/BoardPage";
import { ActionItemsPage } from "../../page-objects/ActionItemsPage";
import { MentionsPage } from "../../page-objects/MentionsPage";

test.describe("Boards Menu", () => {
    let loginPage: LoginPage ;
    let boardPage: BoardPage ;
    let actionItemsPage: ActionItemsPage ;
    let mentionsPage: MentionsPage ;
    test.beforeEach(async ( { page }) => {
        loginPage = new LoginPage(page) ; 
        boardPage = new BoardPage(page) ;
        mentionsPage = new MentionsPage(page) ;
        actionItemsPage = new ActionItemsPage(page)  ; 
        await loginPage.visitMyRetro() ;
        await loginPage.login("darya.markevich.04@inbox.ru", "grnqgfpmoInxaJyrXco8") ;
    }) ;

    test("Check Action Items Menu Option", async ({ page }) => {
        await boardPage.clickActionItemsButton() ;  
        const actionsItemTitle = page.locator("[data-qa=action-items-title]") ;
        await expect(actionsItemTitle) .toHaveText("Action Items") ;
        await expect(page) .toHaveURL ("https://myretro.school.smartup.ru/action_items") ;
    }) ;

    test("Check Mentions Menu Option", async ({ page }) => {
        await boardPage.clickMentionsButton() ;
        await mentionsPage.checkMentionsTitle() ;
        await expect(page) .toHaveURL ("https://myretro.school.smartup.ru/mentions") ;
    }) ;

}) ;