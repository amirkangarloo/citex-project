'use strict'

const express = require('express')
const app = express()
const connectDB = require('./db/connection')
const router = require('./routers')
const errorHandlerMiddleware = require('./middleware/errorHandler')
const notFound = require('./middleware/notFound')


// middleware
app.use(express.json())

// router
router(app)

// not found error
app.use(notFound)

// error handlers
app.use(errorHandlerMiddleware)


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