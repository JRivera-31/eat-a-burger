// Import connection
const connection = require("./connection.js")

// Object for SQL statement functions
const orm = {
    selectAll: function (table, cb) {
        const queryString = "SELECT * FROM " + table + ";"
        connection.query(queryString, function(err, result) {
            if (err) throw err

            cb(result)
        })
    },
    insertOne: function (table, cols, values, cb) {
        let queryString = "INSERT INTO ?? (??) VALUES (?)";
        console.log(queryString);
    
        connection.query(queryString, [table, cols, values], function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
    },
    updateOne: function (table, colName, value, idCol, id, cb) {
        let queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?;"
        connection.query(queryString, [table, colName, value, idCol, id], function(err, result) {
            if (err) throw err

            cb(result)
        })
    }
}

module.exports = orm