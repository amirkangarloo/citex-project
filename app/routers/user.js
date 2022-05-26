'use strict'

const express = require('express')
const router = express.Router()
const {
    userFetchData,
    userUpdateData,
    userDeleteData
} = require('../controllers/userController')
const methodNotAllowed = require('../middleware/methodNotAllowed')
const authMiddleware = require('../middleware/auth')


router.get('/:userId', authMiddleware, userFetchData)
router.patch('/:userId', authMiddleware, userUpdateData)
router.delete('/:userId', authMiddleware, userDeleteData)


// Method Not Allowed
router.all('/:userId', methodNotAllowed)


module.exports = router