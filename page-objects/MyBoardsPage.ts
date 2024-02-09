import {expect, Locator, Page} from "@playwright/test" ;

export class MyBoardsPage {
    readonly page: Page ;
    readonly addNewBoardButton: Locator ;
    readonly projectNameField: Locator ; 
    readonly columnsNumberField: Locator ;
    readonly columnNamesField: Locator ;
    readonly startRetroButton: Locator ;

constructor (page:Page) {
    this.page = page ; 
    this.addNewBoardButton = page.getByTestId("add-new-board") ;
    this.projectNameField = page.locator("[data-qa=new-board-project-name]") ;
    this.columnsNumberField = page.getByTestId("new-board-columns-number") ;
    this.columnNamesField = page.getByTestId("new-board-column-names") ;
    this.startRetroButton = page.getByTestId("start-retro-button") ; 
} ;

 async fillNewBoardForm(projectName: string, columnsNumber: number, columnsName: string) {
    await this.addNewBoardButton.click() ;
    await this.projectNameField.type(projectName) ;
    await this.columnsNumberField.click() ; 
    await this.page.click("text=- " + (columnsNumber) + " -") ;
    await this.columnNamesField.click() ;
    await this.page.click("text=- " + (columnsNumber) + " - " + (columnsName)) ;
 } ;

 async clickstartRetroButton() {
    await this.startRetroButton.click() ;
 }
} ;