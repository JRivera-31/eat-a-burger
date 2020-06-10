// Import express and models
const express = require("express")
const burger = require("../models/burger.js")

const router = express.Router()

router.get("/", (req, res) => {
    burger.selectAll(data => {
        console.log(data)
        res.render("index", {burgers: data})
    })
})

module.exports = router