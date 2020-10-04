import * as express from "express";
import * as bodyparser from "body-parser"
import * as cors from "cors";

import fetch from "./fetch/fetch";
import insert from "./insert/insert";
import update from "./update/update";
import delModule from "./delete/delete"

let app=express();

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use("/fetch",fetch);
app.use("/insert",insert)
app.use("/update",update)
app.use("/delete",delModule);


let port=process.env.PORT || 8080;

app.listen(port,()=>{
    console.log(`server listeing port no ${port}`)
})