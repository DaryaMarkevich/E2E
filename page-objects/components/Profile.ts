import {expect, Locator, Page} from "@playwright/test" ;

export class Profile {
    readonly page: Page ;
    readonly firstNameField: Locator ;
    readonly profileCancelButton: Locator ;
    readonly profileSubmitButton: Locator ;
    readonly emailProfileField: Locator ;
    readonly positionField: Locator ;
    readonly positionButton: Locator ;
    readonly workExperienceField: Locator ;

    constructor (page: Page) {
        this.page = page ; 
        this.firstNameField = page.locator("#first-name") ;
        this.profileCancelButton = page.getByTestId("profile-cancel-button") ; 
        this.profileSubmitButton = page.getByTestId("profile-submit-button") ; 
        this.emailProfileField = page.getByTestId("#email") ;
        this.positionField = page.locator(".md-select-value[name=position-id]") ;
        this.positionButton = page.locator(".md-list-item-text") ;
        this.workExperienceField = page.locator("#workExperience") ;
    } ;

    async changeFirstNameAndCancel() {
        await this.firstNameField.fill("Cancel first name") ;
        await this.profileCancelButton.click() ; 
    } ;

    async changeFirstNameAndSubmit() {
        await this.firstNameField.fill("Submit first name") ;
        await this.profileSubmitButton.click() ; 
    } ;
    
    } ;
