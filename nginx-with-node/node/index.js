const mysql = require('mysql')
const express = require('express')

const app = express()
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const connection = mysql.createConnection(config)
const sql = `INSERT INTO people(name) values('matheus')`
connection.query(sql)
connection.end()

app.get('/', (req, res) => {
    res.send('<h1>Full Cycle Rocks!</h1>')
})

app.listen(port, () => {
    console.log('Listen on port ' + port)
})