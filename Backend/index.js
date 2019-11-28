const express = require("express");
const morgan = require("morgan");
const loger = require("./utils/loger");
const cors = require("cors")
const app = express();

require("./api/persistencia/connection/connection");

//SETTINGS
app.set("port", process.env.PORT || 3000);

//MIDDLEWARES
app.use(morgan("dev"));
app.use(express.json());
app.use(cors({origin: "http://localhost:4200"}));

//ROUTES
app.use("/",require("./routers/routers"));

//STAR SERVER
app.listen(app.get("port"), () => {
    loger.info(`Server running at port ${app.get("port")}`);   
})