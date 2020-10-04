"use strict";
exports.__esModule = true;
var dbClient_1 = require("../config/dbClient");
var db_info_1 = require("../config/db_info");
var express = require("express");
var dbConfigUrl_1 = require("../config/dbConfigUrl");
var update = express.Router().put("/", function (req, res) {
    var basedOnProperty = { "eid": req.body.eid };
    var updateProperty = { $set: {
            "ename": req.body.ename,
            "esal": req.body.esal
        } };
    dbClient_1["default"].connect(dbConfigUrl_1["default"], function (err, client) {
        if (err)
            throw err;
        else {
            var db = client.db(db_info_1["default"].db_name);
            db.collection(db_info_1["default"].db_collectionName).updateOne(basedOnProperty, updateProperty, function (err, result) {
                if (err)
                    throw err;
                else {
                    res.send({ update: "successs" });
                }
            });
        }
    });
});
exports["default"] = update;
