var supertest = require("supertest");
var assert = require("chai").assert;
var server = supertest.agent("http://localhost:1337");

describe("When open home page", function() {
    it("should return code 200 and hello message", function(done) {
        server
            .get("/api")
            .expect("Content-type", /json/)
            .expect(200)
            .end(function(error, response) {
                assert.equal(response.status, 200);
                assert.equal(response.body.message, "Welcome to our Drone Cafe app!");
                done();
            });
    });
});