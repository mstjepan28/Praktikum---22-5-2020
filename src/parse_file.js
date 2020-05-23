function read_file(){
    const fs = require('fs')
    const filePath = String.raw`C:\Users\Stjepan\Desktop\tdd-demo-master\src\Text\long.txt`;
    
    return fs.readFileSync(filePath, 'utf8').split(/[\s,!.:]+/);
}

function build_map(text){
    return text[0]
}

function parse_file(){
    let text = read_file()
    return build_map(text)
}

parse_file()

module.exports = parse_file;