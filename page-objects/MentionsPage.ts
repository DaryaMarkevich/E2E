import {expect, Locator, Page} from "@playwright/test" ;

export class MentionsPage {
    readonly page: Page ;
    readonly mentionsTitle: Locator ;

    constructor (page: Page) {
        this.page = page ; 
        this.mentionsTitle = page.locator("[data-qa=mentions-option]") ; 
    } ;

    async checkMentionsTitle() {
        await expect(this.mentionsTitle).toContainText("Mentions") ; 
    } ;


} ;