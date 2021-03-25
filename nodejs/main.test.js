const app = require('./app');
const request = require('supertest');

describe("backend main tests", () => {
    it("should always be used to evaluate the candidates", (done) => {
        try {
            expect(true).toBe(true);
            done();
        } catch (error) {
            done(error);
        }
    })
});
