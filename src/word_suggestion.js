function get_parsed_file(len){
    let file_map = {1: String.raw`\single_map.json`, 2: String.raw`\double_map.json`, 3: String.raw`\triple_map.json`}

    const fs = require('fs')
    const filePath = String.raw`C:\Users\Stjepan\Desktop\tdd-demo-master\src\Parsed` + file_map[len];
    
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function suggestionTool(currentText){
    let parsed_json = get_parsed_file(currentText.length)

}
let single = get_parsed_file(1)

//console.log(suggestionTool());
//["I AM just", "I am often", "I am currently", "I am 90%"]

module.exports = {
    'file':{
        get_parsed_file: get_parsed_file,    
    },
};
