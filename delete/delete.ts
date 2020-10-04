import grClient from "../config/dbClient";
import db_info from "../config/db_info";
import * as express from "express";
import dbUrl from "../config/dbConfigUrl";

let delModule=express.Router().delete("/",(req,res)=>{

    let id={"eid":req.body.eid}

    grClient.connect(dbUrl,(err,client)=>{
            if(err) throw err;
            else{
                let db=client.db(db_info.db_name)
                db.collection(db_info.db_collectionName).deleteOne(id,(err,result)=>{
                        if(err) throw err;
                        else{
                            res.send({delete:"succeess"})
                        }
                })
            }
    })

})

export default delModule;