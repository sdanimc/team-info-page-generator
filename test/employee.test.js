const employee = require("../lib/employee");
describe("employee", () => {
    const testEmployee = new employee("Sarah", "3", "email@tba.no")
    describe("getName", () => {
        it("should return a name given a new employee", () => {
            const testName = "Sarah";
            expect(testEmployee.getName()).toBe(testName);
        });
    })
    describe("getID", () => {
        it("should return a id given a new employee", () => {
            const testID = "3";
            expect(testEmployee.getId()).toEqual(testID);
        });
    })
    describe("getEmail", () => {
        it("should return a email given a new employee", () => {
            const testEmail = "email@tba.no";
            expect(testEmployee.getEmail()).toBe(testEmail);
        });
    })
    describe("getRole", () => {
        it("should return employee", () => {
            expect(testEmployee.getRole()).toBe('Employee');
        });
    })
})