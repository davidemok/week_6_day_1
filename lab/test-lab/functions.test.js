const { returnTwo, greeting, add, subtract, multiply, divide } = require("./functions.js")
describe("returnTwo", () => {

    it("returns the integer 2", () => {
    expect(returnTwo()).toEqual(2)
    })
    it("returns an integer", () => {
        expect(typeof returnTwo()).toEqual('number')
    })

})

describe("greeting function", () => {
    it("returns the right greeting to James", () => {
        expect(greeting('James')).toEqual("Hello, James.")
    })

    it("returns the right greeting to Jill", () => {
        expect(greeting('Jill')).toEqual("Hello, Jill.")
    })
})

describe("math functions", () => {
    it("returns the sum of 1 and 2", () => {
        expect(add(1, 2)).toEqual(3)
    })
    it("returns the sum of 1 and 2", () => {
        expect(add(5, 9)).toEqual(14)
    })
    it("returns 10 minus 1", () => {
        expect(subtract(10, 1)).toEqual(9)
    })
    it("returns 10 times 10", () => {
        expect(multiply(10, 10)).toEqual(100)
    })
    it("returns 200 divided by 10", () => {
        expect(divide(200, 10)).toEqual(20)
    })
})