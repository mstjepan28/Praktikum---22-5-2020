var assert = require('assert');

const parse_file = require("../parse_file.js");
const maping = parse_file['map'];

const init = maping.init_map;
const build = maping.build_map;
const check = maping.check_map;

describe('init_map funkcija', function() {
    it('init_map za undefined', function () {
        let res = init(undefined)
        assert.equal(toString(res), toString({})); 
    });
    it('init_map za {}', function () {
        let res = init({})
        assert.equal(toString(res), toString({})); 
    });
    it('init_map za {"a": 1}', function () {
        let input = {"a": 1}
        let res = init(input)
        assert.equal(toString(res), toString(input)); 
    });
});

describe('build_map funkcija', function() {
    it('build_map za undefined & "Hello"', function () {
        let res = build(undefined, 'Hello')
        assert.equal(res["Hello"], 1);
    });
    it('build_map za {} & "Hello"', function () {
        let res = build({}, 'Hello')
        assert.equal(res["Hello"], 1);
    });
    it('build_map za {"Hello": 1} & "Hello"', function () {
        let input = {"Hello": 1}
        let res = build(input, 'Hello')
        assert.equal(res["Hello"], 2);
    });
    it('build_map za {"Hello": 1} & "Everyone"', function () {
        let input = {"Hello": 1}
        let res = build(input, 'Everyone')
        assert.equal(res["Hello"], 1);
        assert.equal(res["Everyone"], 1);
    });
});

describe('check_map funkcija', function() {
    it('check_map za undefined', function () {
        let res = check(undefined)
        
        // Everyone jer smo u proslom testu koristili tu rijec i ona je ostala u mapi, to sta ta rijec ostaje nema utjecaj na rad programa samo na test
        assert.equal(res["Everyone"], 0); 
    });
    it('check_map za {}', function () {
        let res = check({})
        assert.equal(res["Everyone"], 0);
    })
    it('check_map za {"Hello": 1}', function () {
        let input = {"Hello": 1}
        let res = check(input)
        assert.equal(res["Hello"], 1);
    });
});

