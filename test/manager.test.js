const manager = require("../lib/manager");
describe("manager", () => {
    const testManager = new manager("Eric", "1", "e@stillno.nope", "555-Spamalot");
    it("should contain office number property", () => {
        const testPhone = "555-Spamalot";
        expect(testManager.officeNumber).toBe(testPhone);
    });
    describe("getRole", () => {
        it("should return Manager", () => {
            expect(testManager.getRole()).toBe('Manager');
        });
    })
})