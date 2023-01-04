const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT

require('dotenv').config()


const mysql = require('mysql2')
const connection = mysql.createConnection(process.env.DATABASE_URL)
console.log('Connected to PlanetScale!')
connection.end()


app.use(express.json())
app.use(cors())

app.listen(port, () => console.log(`SERVER RUNNING ON ${port}`))



