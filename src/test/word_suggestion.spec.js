var assert = require('assert');
const word_suggestion = require("../Code/word_suggestion.js");

const file = word_suggestion['file'];
const get_parsed_file = file.get_parsed_file;

describe('get_parsed_file funkcija', function() {
    it('get_parsed_file za len = 1 / single_map.json', function () {
        let res = get_parsed_file(1)
        let expected =  { i: 1, and: 1, '00': 1, '01%': 2 };
        assert.equal(JSON.stringify(res['0']), JSON.stringify(expected));
    });
    it('get_parsed_file za len = 2 / double_map.json', function () {
        let res = get_parsed_file(2)
        let expected =  { this: 1 };
        assert.equal(JSON.stringify(res["hello everyone"]), JSON.stringify(expected));
    });
    it('get_parsed_file za len = 3 / triple_map.json', function () {
        let res = get_parsed_file(3)
        let expected =  { is: 1 };
        assert.equal(JSON.stringify(res["hello everyone this"]), JSON.stringify(expected));
    });
    it('get_parsed_file za len = 4 / undefined', function () {
        let res = get_parsed_file(4)
        let expected =  {};
        assert.equal(JSON.stringify(res), JSON.stringify(expected));
    });
});

const suggestion = word_suggestion['suggestion'];
const suggestionTool = suggestion.suggestionTool;
const get_suggestion = suggestion.get_suggestion;

describe('suggestionTool funkcija', function() {
    it('suggestionTool za nepostojece podatke', function () {
        let res = suggestionTool("a b c d e f g")
        assert.equal(res, "No matches");
    });
    it('suggestionTool za single podatke', function () {
        let res = suggestionTool("trivial")
        assert.equal(res[0], "trivial thing");
    });
    it('suggestionTool za double podatke', function () {
        let res = suggestionTool("my mother")
        assert.equal(res[0], "my mother is");
        assert.equal(res[1], "my mother was");
    });
    it('suggestionTool za triple podatke', function () {
        let res = suggestionTool("After much argument")
        assert.equal(res[0], "after much argument my");
    });
});

describe('get_suggestion funkcija', function() {
    it('get_suggestion sa jednom vrijednosti u mapi', function () {
        let res = get_suggestion({"is":1}, "hello everyone this")
        assert.equal(res[0], "hello everyone this is");
    });
    it('get_suggestion sa dvije vrijednosti u mapi', function () {
        let res = get_suggestion({"now":1,"today":1}, "that's it for")
        assert.equal(res[0], "that's it for now");
        assert.equal(res[1], "that's it for today");
    });
    it('get_suggestion sa 3+ vrijednosti u mapi', function () {
        let matches = {"of":20,"is":2,"but":2,"can":2,"twoo":1,"i":3,"subject":1,"in":2,"time":1,"day":7,"will":2,"aspect":1,"didn't":1,"hour":1,"way":1,"person":1,"that":2,"where":1,"two":1,"corse":1,"point":2,"piece":1,"not":1,"little":1,"teeny":1,"then":1,"big":1,"even":1,"thing":3,"to":2,"any":1,"sitting":1,"inch":1,"sixth":1,"thermo":1,"soon":1,"weakness":1,"yeah":1,"has":1,"for":1,"guy":2,"it's":1,"out":1,"you":1,"so":1,"vulnerable":1,"who's":1,"about":1,"we":1,"friday":1,"single":1,"on":1,"song":1,"at":1,"moment":1,"step":1,"child":1,"who":2,"ken":1,"he":1}
        let res = get_suggestion(matches, "one")
        
        assert.equal(res[0], "one of");
        assert.equal(res[1], "one day");
        assert.equal(res[2], "one i");
    });
});
