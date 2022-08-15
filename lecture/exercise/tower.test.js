const tower = require("./tower")

console.log(tower(3))

//describe test, callback function
describe("tower builder function", () => {
    //test goes here
    test("Is a function", () => {
        expect(typeof tower).toEqual('function');
    })
    //it and test are the same thing
    it("returns an array", () => {
        let returnedValue = tower(0)
        expect(returnedValue instanceof Array).toEqual(true)
    })

    it("returns a formatted pyramid", () => {
        let returnedValue = tower(3);
        expect(returnedValue).toEqual([ '  *  ', ' *** ', '*****' ])
    })
})