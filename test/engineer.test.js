const engineer = require('../lib/engineer');
describe("engineer", () => {
    const testEngineer = new engineer("Eric", "1", "e@stillno.nope", "eric_Workday");
    describe("getGitHub", () => {
        it("should return a gitHub username given a new engineer", () => {
            const testGitUser = "eric_Workday";
            expect(testEngineer.getGithub()).toBe(testGitUser);
        });
    })
    describe("getRole", () => {
        it("should return engineer", () => {
            expect(testEngineer.getRole()).toBe('Engineer');
        });
    })
})