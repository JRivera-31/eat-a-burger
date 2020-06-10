// Import express and models
const express = require("express")
const burger = require("../models/burger.js")

const router = express.Router()

// Set up routes
router.get("/", (req, res) => {
    burger.selectAll(data => {
        console.log(data)
        res.render("index", {burgers: data})
    })
})

router.post("/api/burgers", (req, res) => {
    burger.insertOne(burger_name, req.body.burger, result => {
        // Send back id of new burger
        res.json({id: result.insertId})
    })
})

module.exports = router