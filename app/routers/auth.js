'use strict'

const express = require('express')
const router = express.Router()
const {
    authRegister,
    authLogin
} = require('../controllers/authController')


router.post('/register', authRegister)
router.post('/login', authLogin)

module.exports = router