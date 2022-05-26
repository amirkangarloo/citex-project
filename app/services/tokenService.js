'use strict'

const jwt = require('jsonwebtoken')

const sing = (data) => {
    return jwt.sign(data, process.env.APP_SECRET, { expiresIn: '7d' })
}

const verify = (token) => {
    try {
        const payload = jwt.verify(token, process.env.APP_SECRET)
        // if token is valid        
        return payload
    } catch (error) {
        // if token is valid
        return false
    }
}

module.exports = {
    sing,
    verify
}