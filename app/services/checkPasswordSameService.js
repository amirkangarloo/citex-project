'use strict'

const CustomAPIError = require('./customErrorService')

module.exports = (password, rePassword) => {
    if (password === rePassword) {
        return true
    }
    throw new CustomAPIError('Password and rePassword does not be same', 406)
}