import grClient from "../config/dbClient";
import db_info from "../config/db_info";
import * as express from "express";
import dbUrl from "../config/dbConfigUrl"

// const url="mongodb+srv://admin:admin@cluster0.vrzi6.mongodb.net/mernCrud?retryWrites=true&w=majority0;"


let fetch=express.Router().get("/",(req,res)=>{
    
    grClient.connect(dbUrl,(err,client)=>{
        if(err) throw err;
        else{
            let db=client.db(db_info.db_name);
            db.collection(db_info.db_collectionName).find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.send(array)
                }
            })
        }
    })


})

// module.exports =fetch;
export default fetch;