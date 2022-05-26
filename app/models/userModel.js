'use strict'

const mongoos = require('mongoose')

const userSchema = new mongoos.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        max: 80,
        min: 12
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
    },
    updated_at: {
        type: Date,
        default: null
    }
})

const userModel = mongoos.model('User', userSchema)

module.exports = userModel