import {test, expect} from "@playwright/test" ;

let cardId: number ; 

test.describe.parallel("Cards API endpoints testing", () =>  {
    test("Add new card", async ({request}) => {
        const response = await request.post("cards", {
            data: {
                "columnId": 3001,
                "content": "API test", 
            }
        }) ;

        const responseBody = JSON.parse(await response.text()) ; 

        console.log(responseBody) ; 

        expect(response.status()).toBe(200) ;
        expect(responseBody.content).toBe("API test") ;

        
        cardId = responseBody.id ;

        console.log("new card ID: " + cardId) ;
    }) ;
}) ;

test.afterAll(async ({request}) => {
    const response = await request.delete(`cards/${cardId}`) ;

    console.log("deleted card ID: " + cardId) ;
    
    expect(response.status()).toBe(200) ;
}) ;