function read_file(){
    let fs = require('fs')
    const filePath = String.raw`C:\Users\Stjepan\Desktop\tdd-demo-master\src\Text\long.txt`;
    return fs.readFileSync(filePath, 'utf8')
}

function suggestionTool(currentText){
    let data = read_file()
    return data[0]
}


console.log(suggestionTool());
//["I AM just", "I am often", "I am currently", "I am 90%"]

module.exports = suggestionTool;