var assert = require('assert');
const parse_file = require("../parse_file.js");

const parse = parse_file.parse_file;
const read_file = parse_file.read_file;
const build_map = parse_file.build_map;
const export_map = parse_file.export_as_json;


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

describe('build_map funkcija', function() {
    it('funckija postoji', function () {
        build_map();
    });
    it('Vracani rijecnik je validan / sadrzava prave podatke', function () {
        let result = build_map({}, {}, {});
        assert.notEqual(result['1'], undefined);
        assert.notEqual(result['2'], undefined); 
        assert.notEqual(result['3'], undefined); 
    });
});

describe('export_as_json funkcija', function() {
    it('funckija postoji', function () {
        export_map();
    });
});

