import {test, expect} from "@playwright/test" ;

test.describe.parallel("Other API endpoints testing", () =>  {
    test("Get info about user", async ({request}) => {
        const response = await request.get("me") ;

        const responseBody = JSON.parse(await response.text()) ;
        console.log(responseBody) ; 

        expect(response.status()).toBe(200) ;
        expect(responseBody.id).toBe(24); 
        expect(responseBody.username).toBe("darya.markevich.04") ;
        expect(responseBody.email).toBe("darya.markevich.04@inbox.ru") ;
        expect(responseBody.position.id).toBe(3); 
    }) ;

    test("Return template of board parameters", async ({request}) => {
        const response = await request.get("templates") ; 

        const responseBody = JSON.parse(await response.text()) ;
        console.log(responseBody) ; 

        expect(response.status()).toBe(200) ;
        expect(responseBody[0].columns[0].name).toBe("Good");
    }) ;
}) ;