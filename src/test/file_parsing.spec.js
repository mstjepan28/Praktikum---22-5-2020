var assert = require('assert');
const parse_file = require("../parse_file");

describe('Parsiranje long.txt', function() {
    it('Funkcija postoji', function () {
        parse_file();
    });
    it("Razdvajanje rijeci u fileu", function() {
        assert.equal(parse_file(), "Hello"); 
     });
});

