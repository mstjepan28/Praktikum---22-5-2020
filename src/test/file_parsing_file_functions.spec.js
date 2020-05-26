var assert = require('assert');

const parse_file = require("../parse_file.js");
const file = parse_file['file'];


const parse = file.parse_file;
const read_file = file.read_file;
const export_map = file.export_as_json;


describe('parse_file funkcija', function() {
    it('Funkcija postoji', function () {
        parse();
    });
});

describe('read_file funkcija', function() {
    it('read_file vraca polje', function () {
        let result = read_file();
        assert.equal(Array.isArray(result), Array.isArray([]) ); 
    });
    it('Prvi element polja je "Hello"', function () {
        let result = read_file();
        assert.equal(result[0], 'Hello'); 
    });
    it('Drugi element polja je "everyone"', function () {
        let result = read_file();
        assert.equal(result[1], 'everyone'); 
    });
});

describe('export_as_json funkcija', function() {
    it('funckija postoji', function () {
        export_map();
    });
});

