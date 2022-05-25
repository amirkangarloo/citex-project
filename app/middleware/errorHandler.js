'use strict'

const CustomAPIError = require('../services/customErrorService')
const errorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).send({
            massage: err.message,
            status: err.statusCode
        })
    }

    // mobile number unique error
    if (err.keyPattern) {
        return res.status(406).send({
            massage: `It has already been registered with mobile number ${err.keyValue.mobile}`,
            status: 406
        })
    }

    // database validation error
    if (err._message) {
        return res.status(406).send({
            massage: err._message,
            status: 406
        })
    }

    return res.status(500).send({
        massage:'Something went wrong try again later',
        status: 500
    })
}

module.exports = errorHandlerMiddleware