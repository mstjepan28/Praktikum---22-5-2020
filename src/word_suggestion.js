function get_parsed_file(len){
    let file_map = {1: String.raw`\single_map.json`, 2: String.raw`\double_map.json`, 3: String.raw`\triple_map.json`, get undefined(){return String.raw`\error_handler.json`} }
    let num_map = {1:1, 2:2, 3:3} //Provjeravamo ako je len u dozvoljenom rasponu, ako nije vraca se undefined koji se obraduje dalje u file_map
    
    const fs = require('fs')
    const filePath = String.raw`C:\Users\Stjepan\Desktop\tdd-demo-master\src\Parsed` + file_map[num_map[len]];
    
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function get_suggestion(phrase){
    
}

function suggestionTool(phrase){
    let type_handler = {
        'phrase': null,
        get undefined(){return "No matches"}, 
        get object(){return get_suggestion(this.phrase)}
    }
    type_handler['phrase'] = phrase;
    
    let file = get_parsed_file(phrase.length)
    return type_handler[typeof(file[phrase])]
}

//console.log(suggestionTool());
//["I AM just", "I am often", "I am currently", "I am 90%"]

module.exports = {
    'file':{
        get_parsed_file: get_parsed_file,    
    },
    'suggestion':{
        suggestionTool: suggestionTool
    }
};
