var fs = require('fs');

function read_json_file() {
    var file = '../data/Foodjson.json';
    return fs.readFileSync(file);
}

function read_json_team(){
    var file = '../data/team.json';
    return fs.readFileSync(file);
}

exports.list = function () {
    return JSON.parse(read_json_file());
};

exports.teamList = function() {
    return JSON.parse(read_json_team());
};

