'use strict'

const CustomAPIError = require('../services/customErrorService')

module.exports = () => {
    throw new CustomAPIError('Method Not Allowed', 405)
}