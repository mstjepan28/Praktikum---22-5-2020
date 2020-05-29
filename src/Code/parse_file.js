// IMPORT & EXPORT FILES //
function read_file(){
    const fs = require('fs')
    const filePath = __dirname + String.raw`/../Text/long.txt`;
    
    return fs.readFileSync(filePath, 'utf8').split(/[\s\n",!.?():*+-]/).filter(element => element !== '');
}

function export_as_json(single, double, triple){
    const fs = require('fs');
    
    fs.writeFile("../Parsed/single_map.json", JSON.stringify(single), 'utf8', ()=>{console.log("single_map saved!")})
    fs.writeFile("../Parsed/double_map.json", JSON.stringify(double), 'utf8', ()=>{console.log("double_map saved!")})
    fs.writeFile("../Parsed/triple_map.json", JSON.stringify(triple), 'utf8', ()=>{console.log("triple_map saved!")})
    fs.writeFile("../Parsed/error_handler.json", JSON.stringify({}), 'utf8', ()=>{console.log("error_handler saved!")})
}

// BUILD MAP //
// repetition_map je formata: "rijec:{rijec_nakon: num_ponavljanja, rijec_nakon:...}"  'I':{'am': 2, 'will':4,...}
let type_handler = {
    'rep_map': null,
    'next': 'deafult',
    
    // CHECK OBJECT
    get 0(){let n=this.next; this.rep_map[n]=0; return this.rep_map}, 
    get undefined(){return {}},
    get object(){return this.rep_map},

    // CHECK VALUES IN OBJECT
    get number_(){return this.rep_map[this.next] += 1},
    get undefined_(){return this.rep_map[this.next] = 1}
}
function check_map(word_map){
    type_handler['rep_map'] = word_map // Bez ovog bi se word_map u sljedecoj liniji postavio na null ako je objekt
    
    word_map = type_handler[typeof(word_map)]
    type_handler['rep_map'] = word_map // Ako je word_map undefined update-amo rep_map zbog ponovnog koristenja
    type_handler[Object.keys(word_map).length];
    return type_handler.rep_map;
}
function build_map(repetition_map, next){
    type_handler['next'] = next;
    
    repetition_map = check_map(repetition_map)
    repetition_map[next] = type_handler[typeof(repetition_map[next])+"_"];
    
    return repetition_map
}
function init_map(word_map){
    type_handler['rep_map'] = word_map // Bez ovog bi se word_map u sljedecoj liniji postavio na null ako je objekt
    return type_handler[typeof(word_map)]
}

// WORD MAPPING //
function map_single(text, word_map){
    for(let index = 0; index <= text.length-2; index++){
        let cur_word = text[index].toLowerCase();
        let next_word = text[index + 1].toLowerCase();

        word_map[cur_word] = init_map(word_map[cur_word]);
        word_map[cur_word] = build_map(word_map[cur_word], next_word);        
    }

    return word_map
}
function map_double(text, word_map){
    for(let index = 0; index <= text.length-3; index++){
        let cur_word = (text[index] + " " + text[index + 1]).toLowerCase();
        let next_word = text[index + 2].toLowerCase();

        word_map[cur_word] = init_map(word_map[cur_word]);
        word_map[cur_word] = build_map(word_map[cur_word], next_word);        
    }

    return word_map
}
function map_triple(text, word_map){
    for(let index = 0; index <= text.length-4; index++){
        let cur_word = (text[index] + " " + text[index+1] + " " + text[index+2]).toLowerCase();
        let next_word = text[index + 3].toLowerCase();

        word_map[cur_word] = init_map(word_map[cur_word]);
        word_map[cur_word] = build_map(word_map[cur_word], next_word);        
    }

    return word_map
}

// MAIN FUNCTION
function parse_file(){
    let text = read_file()

    const single = map_single(text, {});
    const double = map_double(text, {});
    const triple = map_triple(text, {});

    export_as_json(single, double, triple);
}
parse_file()

// EXPORT FOR TESTING //
module.exports = {
    'file':{
        read_file: read_file,
        export_as_json: export_as_json       
    },
    'map':{
        type_handler: type_handler,
        init_map: init_map,
        build_map: build_map,
        check_map: check_map
    },
    'pairing':{
        map_single: map_single,
        map_double: map_double,
        map_triple: map_triple
    }
};