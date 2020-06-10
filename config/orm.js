// Import connection
const connection = require("./connection.js")

// Object for SQL statement functions
const orm = {
    selectAll: function (tableInput, cb) {
        const queryString = "SELECT * FROM ??"
        connection.query(queryString, [tableInput], (err, result) => {
            if (err) throw err

            cb(result)
        })
    },

    insertOne: function (tableInput, col, value, cb) {
        const queryString = "INSERT INTO ?? (??) VALUES (?)"
        connection.query(queryString, [tableInput, col, value], (err, result) => {
            if (err) throw err
            
            cb(result)
        })
    },
    
    updateOne: function (tableInput, colName, value, idCol, id, cb) {
        const queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?"
        connection.query(queryString, [tableInput, colName, value, idCol, id], (err, result) => {
            if (err) throw err

            cb(result)
        })
    }
}