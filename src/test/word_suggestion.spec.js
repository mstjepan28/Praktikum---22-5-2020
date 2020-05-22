var assert = require('assert');
const word_suggestion = require("../word_suggestion");

describe('Predlaganje rijeci', function() {
    it('Funkcija postoji', function () {
        word_suggestion();
    });
    it("File se procita", function() {
        assert.equal(word_suggestion(), "H"); 
     });
 
});