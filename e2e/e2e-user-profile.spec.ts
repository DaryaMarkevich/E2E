import {test, expect} from "@playwright/test" ;
import { LoginPage } from "../../page-objects/LoginPage";
import { BoardPage } from "../../page-objects/BoardPage";
import { Profile } from "../../page-objects/components/Profile";

test.describe("User Profile", () => {
    let loginPage: LoginPage ;
    let boardPage: BoardPage ;
    let profile: Profile ;
    test.beforeEach(async ( { page }) => {
        loginPage = new LoginPage(page) ; 
        boardPage = new BoardPage(page) ;
        profile = new Profile(page) ;
        await loginPage.visitMyRetro() ;
        await loginPage.login("darya.markevich.04@inbox.ru", "grnqgfpmoInxaJyrXco8") ;
    }) ;
    
    test("Change First Name and Cancel", async ({ page }) => {
        await boardPage.clickProfile() ;
        await profile.changeFirstNameAndCancel() ;
        await boardPage.clickProfile() ;
        const firstNameField = page.locator("#first-name") ;
        await expect(firstNameField).not.toHaveValue("Cancel first name") ;

    }) ;

    test("Change First Name and Submit", async ({ page }) => {
        await boardPage.clickProfile() ;
        await profile.changeFirstNameAndSubmit() ;
        await boardPage.clickProfile() ;
        const firstNameField = page.locator("#first-name") ;
        await expect(firstNameField).toHaveValue("Submit first name") ;

    }) ;

    test("Check Email Field", async ({ page }) => {
        await boardPage.clickProfile() ;
        const email = page.locator("#email") ;
        await expect(email).toHaveValue("darya.markevich.04@inbox.ru") ;

    }) ;

    test("Change Position and Submit", async ({ page }) => {
        await boardPage.clickProfile() ;
        await page.click(".md-select-value[name=position-id]") ;
        await page.getByRole("button", {name: "project manager"}).click() ;
        await page.getByTestId("profile-submit-button").click() ;
        await boardPage.clickProfile() ;
        const position = page.locator(".md-select-value[name=position-id]") ;
        await expect(position) .toHaveValue("project manager") ;

    }) ;

    test("Change Work Experience and Submit", async ({ page }) => {
        await boardPage.clickProfile() ;
        await page.fill("#workExperience", "11") ;
        await page.getByTestId("profile-submit-button").click() ;
        await boardPage.clickProfile() ;
        const experience = page.locator("#workExperience") ;
        await expect(experience) .toHaveValue("11") ;

    }) ;

    test("Change Birthday and Submit", async ({ page }) => {
        await boardPage.clickProfile() ;
        await page.fill(".field-birthday .md-input", "2000-09-22") ;
        await (await page.waitForSelector("text=Ok")).click() ;
        await page.click("[data-qa=profile-submit-button]") ;

        await boardPage.clickProfile() ;
        const birthdayDate = page.locator(".field-birthday .md-input") ;
        await expect(birthdayDate) .toHaveValue("2000-09-22") ;
    }) ;

    test("Change Last Name and Cancel", async ({ page }) => {
        await boardPage.clickProfile() ;
        const lastNameField = page.locator("#last-name") ;
        await lastNameField.fill("Cancel last name") ;
        await page.getByTestId("profile-cancel-button").click();
        await boardPage.clickProfile() ;
        await expect(lastNameField).not.toHaveValue("Cancel last name") ;
    }) ;

    test("Change Last Name and Submit", async ({ page }) => {
        await boardPage.clickProfile() ;
        const firstNameField = page.locator("#last-name") ;
        await firstNameField.fill("Submit last name") ;
        await page.getByTestId("profile-submit-button").click();
        await boardPage.clickProfile() ;
        await expect(firstNameField).toHaveValue("Submit last name") ;
    }) ;

    test("Change Phone and Cancel", async ({ page }) => {
        await boardPage.clickProfile() ;
        const phone = page.locator("#phone") ;
        await phone.fill("+77777777777") ;
        await page.getByTestId("profile-cancel-button").click();
        await boardPage.clickProfile() ;
        await expect(phone).not.toHaveValue("+77777777777") ;
    }) ;

    test("Change Phone and Submit", async ({ page }) => {
        await boardPage.clickProfile() ;
        const phone = page.locator("#phone") ;
        await phone.fill("+77777777778") ;
        await page.getByTestId("profile-submit-button").click();
        await boardPage.clickProfile() ;
        await expect(phone).toHaveValue("+77777777778") ;
    }) ;

    }) ;