var assert = require('assert');

const parse_file = require("../Code/parse_file.js");
const pairing = parse_file['pairing'];

const single = pairing.map_single;
const double = pairing.map_double;
const triple = pairing.map_triple;

let test_text = ['Hello', 'everyone', 'This', 'Hello', 'is', 'one', 'of', 'the', 'weirdest']

describe('funkcije za uprarivanje', function() {
    it('map_single', function () {
        let res = single(test_text, {})
        let expected = { hello: { everyone: 1, is: 1 },everyone: { this: 1 },this: { hello: 1 },is: { one: 1 },one: { of: 1 },of: { the: 1 },the: { weirdest: 1 } }
        assert.equal(JSON.stringify(res), JSON.stringify(expected));
    });
    it('map_double', function () {
        let res = double(test_text, {})
        let expected = { 'hello everyone': { this: 1 }, 'everyone this': { hello: 1 }, 'this hello': { is: 1 }, 'hello is': { one: 1 }, 'is one': { of: 1 }, 'one of': { the: 1 }, 'of the': { weirdest: 1 } }
        assert.equal(JSON.stringify(res), JSON.stringify(expected));
    });
    it('map_triple', function () {
        let res = triple(test_text, {})
        let expected = { 'hello everyone this': { hello: 1 }, 'everyone this hello': { is: 1 }, 'this hello is': { one: 1 }, 'hello is one': { of: 1 }, 'is one of': { the: 1 }, 'one of the': { weirdest: 1 } }
        assert.equal(JSON.stringify(res), JSON.stringify(expected));
    });
});
