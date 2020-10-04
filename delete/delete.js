"use strict";
exports.__esModule = true;
var dbClient_1 = require("../config/dbClient");
var db_info_1 = require("../config/db_info");
var express = require("express");
var dbConfigUrl_1 = require("../config/dbConfigUrl");
var delModule = express.Router()["delete"]("/", function (req, res) {
    var id = { "eid": req.body.eid };
    dbClient_1["default"].connect(dbConfigUrl_1["default"], function (err, client) {
        if (err)
            throw err;
        else {
            var db = client.db(db_info_1["default"].db_name);
            db.collection(db_info_1["default"].db_collectionName).deleteOne(id, function (err, result) {
                if (err)
                    throw err;
                else {
                    res.send({ "delete": "succeess" });
                }
            });
        }
    });
});
exports["default"] = delModule;
