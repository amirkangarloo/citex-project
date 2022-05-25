'use strict'

const express = require('express')
const router = express.Router()
const {
    authRegister,
    authLogin
} = require('../controllers/authController')
const methodNotAllowed = require('../middleware/methodNotAllowed')


router.post('/register', authRegister)
router.post('/login', authLogin)

// Method Not Allowed
router.all('/register', methodNotAllowed)
router.all('/login', methodNotAllowed)


module.exports = router