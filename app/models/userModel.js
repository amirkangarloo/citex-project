'use strict'

const mongoos = require('mongoose')

const userSchema = new mongoos.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
        match: /^09[0-9]{9}$/
    },
    password: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
})

const userModel = mongoos.model('User', userSchema)

module.exports = userModel