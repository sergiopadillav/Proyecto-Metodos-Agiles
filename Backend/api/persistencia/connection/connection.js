const config = require("../../../config/config");
const mongoose = require("mongoose");
const loger = require("../../../utils/loger");

mongoose.connect(config.mongodb.defaultconnection,{
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    poolSize: 10
});

mongoose.connection.on("connected", ()=>{
    loger.info(`Mongoose connected to: ${config.mongodb.defaultconnection}`);
});

mongoose.connection.on("error", (err)=>{
    loger.error(`Mongoose error: ${err}`);
});

mongoose.connection.on("disconnected", ()=>{
    loger.info(`Mongoose disconnected`);
});