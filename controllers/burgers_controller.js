const express = require('express');

const router = express.Router();

const burger = require("../models/burger");

router.get("/", function(req, res){
    burger.selectAll(function(data){
        var hbsObject = {
            burgers: data
        };

        res.render("index", hbsObject);
    });
});

router.post("/burger", function(req, res){
    console.log(req.body.name);
    burger.insertOne(req.body.name, function(result){
        res.json({ id: result.insertId });
    });
});

router.put("/burger/:id", function(req, res){
    var condition = "id = " + req.params.id;

    burger.updateOne(condition, function(result){
        if (result.changedRows == 0) {
            return res.status(404).end()
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;