'use strict'

const express = require('express')
const app = express()
const connectDB = require('./db/connection')

// middleware
app.use(express.json())


module.exports = async (port) => {
    try {
        // connection to the database
        const {
            MONGO_URL,
            MONGO_DB_NAME
        } = process.env
        await connectDB(MONGO_URL, MONGO_DB_NAME)

        app.listen(port, () => {
            console.log(`The server is listening on port: ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}