import grClient from "../config/dbClient";
import db_info from "../config/db_info";
import * as express from "express";
import dbUrl from "../config/dbConfigUrl"

let insert=express.Router().post("/",(req,res)=>{



    let newRecords={
        "eid":req.body.eid,
        "ename":req.body.ename,
        "esal":req.body.esal
    }
    grClient.connect(dbUrl,(err, client)=>{
            if(err) throw err;
            else{
                let db=client.db(db_info.db_name);

                db.collection(db_info.db_collectionName).insertOne(newRecords,(err,result)=>{

                    if(err) throw err;
                    else{
                        res.send({insert:"success"})
                    }
                })
            }
        })
})

export default insert;