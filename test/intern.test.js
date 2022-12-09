const intern =require('../lib/intern');
describe("intern", () => {
    const testIntern = new intern("Eric", "1", "e@stillno.nope", "Purdue");
    describe("getSchool", () => {
        it("should return a school name given a new intern", () => {
            const testSchool = "Purdue";
            expect(testIntern.getSchool()).toBe(testSchool);
        });
    })
    describe("getRole", () => {
        it("should return Intern", () => {
            expect(testIntern.getRole()).toBe('Intern');
        });
    })
})