// Import express and models
const express = require("express")
const burger = require("../models/burger.js")

const router = express.Router()

// Set up routes
router.get("/", (req, res) => {
    burger.selectAll(data => {
        let hbsObject = {
            burgers: data
        }
        console.log(hbsObject)
        res.render("index", hbsObject)
    })
})

router.post("/api/burgers", (req, res) => { 
    burger.insertOne("name", req.body.name, result => {
        // Send back id of new burger
        res.json({id: result.insertId})
    })
})

router.put("/api/burger/:id", (req, res) => {
    let condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({devoured: req.body.devoured}, condition, (result) => {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
})

router.delete("/api/burgers/:id", (req, res) => {
    let condition = "id = " + req.params.id

    burger.delete(condition, result => {
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
})

module.exports = router