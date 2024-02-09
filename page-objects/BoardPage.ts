import {expect, Locator, Page} from "@playwright/test" ;

export class BoardPage {
    readonly page: Page ;
    readonly hamburgerMenu: Locator ;
    readonly actionItemsButton: Locator ;
    readonly mentionsButton: Locator ;
    readonly profileButton: Locator ;

    constructor (page: Page) {
        this.page = page ; 
        this.hamburgerMenu = page.locator(".hamburger-checkbox") ;
        this.actionItemsButton = page.getByTestId("action-items-option") ; 
        this.mentionsButton = page.getByTestId("mentions-option") ; 
        this.profileButton = page.getByTestId("profile-option") ;
    } ;

    async clickActionItemsButton() {
        await this.hamburgerMenu.click() ;
        await this.actionItemsButton.click() ; 
    } ;

    async clickMentionsButton() {
        await this.hamburgerMenu.click() ;
        await this.mentionsButton.click() ; 
    } ;

    async clickProfile() {
        await this.hamburgerMenu.click() ;
        await this.profileButton.click() ;
    }

} ;