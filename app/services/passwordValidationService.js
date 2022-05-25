'use strict'

const CustomAPIError = require('./customErrorService')
const passwordValidator = require('password-validator')
const schema = new passwordValidator()

schema
.is().min(8)                                    // Minimum length 8
.is().max(100)                                  // Maximum length 100
.has().uppercase()                              // Must have uppercase letters
.has().lowercase()                              // Must have lowercase letters
.has().digits(1)                                // Must have at least 1 digits
.has().not().spaces()                           // Should not have spaces


module.exports = (password) => {
    const result = schema.validate(password)
    if (result === false) {
        throw new CustomAPIError('password must be longer than 8 characters and should contain at least a number, an Uppercase alphabet and a lowercase alphabet.', 406)
    }
}