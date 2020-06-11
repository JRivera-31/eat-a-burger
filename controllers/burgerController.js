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

module.exports = router