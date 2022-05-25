'use strict'

const CustomAPIError = require('../services/customErrorService')
const errorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).send({
            massage: err.message,
            status: err.statusCode
        })
    }
    return res.status(500).send({
        massage: 'Something went wrong try again later',
        status: 500
    })
}

module.exports = errorHandlerMiddleware