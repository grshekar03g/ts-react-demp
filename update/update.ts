import grClient from "../config/dbClient";
import db_info from "../config/db_info";
import * as express from "express";
import dbUrl from "../config/dbConfigUrl";

let update=express.Router().put("/",(req,res)=>{

    let basedOnProperty={"eid":req.body.eid};
    let updateProperty={$set:{
        "ename":req.body.ename,
        "esal":req.body.esal
    }}


    grClient.connect(dbUrl,(err,client)=>{


            if(err) throw err;
            else{
                let db=client.db(db_info.db_name)
                db.collection(db_info.db_collectionName).updateOne(basedOnProperty,updateProperty,(err,result)=>{
                    if(err) throw err;
                    else{
                        res.send({update:"successs"})
                    }
                    
                })
            }

    })

})

export default update;