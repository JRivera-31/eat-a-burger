// Import orm
const orm = require("../config/orm.js")

const burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res)
        })
    },
    insertOne: function (cols, values, cb) {
        orm.insertOne("burgers", cols, values, function (res) {
            cb(res)
        })
    },
    updateOne: function (colName, value, idCol, id, cb) {
        orm.updateOne("burgers", colName, value, idCol, id, function(res) {
            cb(res)
        })
    }
}

module.exports = burger