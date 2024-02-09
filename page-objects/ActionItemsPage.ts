import {expect, Locator, Page} from "@playwright/test" ;

export class ActionItemsPage {
    readonly page: Page ;
    readonly actionsItemTitle: Locator ;

    constructor (page: Page) {
        this.page = page ; 
        this.actionsItemTitle = page.locator("[data-qa=action-items-title]") ; 
    } ;

} ;