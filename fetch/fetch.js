"use strict";
exports.__esModule = true;
var dbClient_1 = require("../config/dbClient");
var db_info_1 = require("../config/db_info");
var express = require("express");
var dbConfigUrl_1 = require("../config/dbConfigUrl");
// const url="mongodb+srv://admin:admin@cluster0.vrzi6.mongodb.net/mernCrud?retryWrites=true&w=majority0;"
var fetch = express.Router().get("/", function (req, res) {
    dbClient_1["default"].connect(dbConfigUrl_1["default"], function (err, client) {
        if (err)
            throw err;
        else {
            var db = client.db(db_info_1["default"].db_name);
            db.collection(db_info_1["default"].db_collectionName).find().toArray(function (err, array) {
                if (err)
                    throw err;
                else {
                    res.send(array);
                }
            });
        }
    });
});
// module.exports =fetch;
exports["default"] = fetch;
