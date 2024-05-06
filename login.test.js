const login=require("./login")
describe("Addition", ()=>{

    //Test 1
    it("Test 1: giltiga användarnamn och lösenord.", ()=>{
        expect(login("admin", "password123")).toBeTruthy()
    })

     //Test 2
     it("Test 2: ogiltiga användarnamn och lösenord.", ()=>{
        expect(login("user", "qwerty")).toBeFalsy()
        expect(login("user", "qwerty")).not.toBeTruthy()
     })

     //Test 3
     it("Test 3: giltiga lösenordet, men ogiltiga användarnamnet.", ()=>{
        expect(login("Niklas", "password123")).toBeFalsy()
        expect(login("Niklas", "password123")).not.toBeTruthy()
     })

     //Test 4
     it("Test 4: giltiga användarnamnet, men ogiltiga lösenordet.", ()=>{
        expect(login("admin", "123456")).toBeFalsy()
        expect(login("admin", "123456")).not.toBeTruthy()
     })

     //Test 5
    it("Test 5: ett fel - stora bokstäver.", ()=>{
        expect(login("Admin", "Password123")).toBeFalsy()
        expect(login("Admin", "Password123")).not.toBeTruthy()
    })

    //Test 6
    it("Test 6: ett fel - mellanslag.", ()=>{
        expect(login("admin", "  Password123")).toBeFalsy()
        expect(login("admin", "  Password123")).not.toBeTruthy()
    })
     
})
