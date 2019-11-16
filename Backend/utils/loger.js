const fs = require("fs");
const log = require("log");
const fileLog = new log("info", fs.createWriteStream("info.log", {flags: "a"}));

exports.info = function(message){
    console.log(message);
    fileLog.info(message);
}

exports.error = function(message){
    console.error(message);
    fileLog.error(message);
}