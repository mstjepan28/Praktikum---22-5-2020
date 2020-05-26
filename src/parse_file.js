// READ THE TEXT FILE //
function read_file(){
    const fs = require('fs')
    const filePath = String.raw`C:\Users\Stjepan\Desktop\tdd-demo-master\src\Text\long.txt`;
    
    return fs.readFileSync(filePath, 'utf8').split(/[\s\n",!.?()@%€$:*+-]/).filter(element => element !== '');
}

// EXPORT AS JSON //
function export_as_json(final_map){
    const fs = require('fs');
    
    fs.writeFile("./Parsed/final_map.json", JSON.stringify(final_map), 'utf8', ()=>{console.log("map saved!")})
}


// BUILD FINAL // 
function build_map(single, double, triple){
    return {
        1: single,
        2: double,
        3: triple
    }
}

// MAIN FUNCTION
function parse_file(){
    let text = read_file()

    const single = {}//map_single(text, {});
    const double = {}//map_double(text, {});
    const triple = {}//map_triple(text, {});

    let final = build_map(single, double, triple);
    export_as_json(final);
}

parse_file()

module.exports = {
    parse_file: parse_file,
    read_file: read_file,
    build_map: build_map,
    export_as_json: export_as_json,
};