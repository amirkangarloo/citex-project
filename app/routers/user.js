'use strict'

const express = require('express')
const router = express.Router()
const {
    userFetchData,
    userUpdateData,
    userDeleteData
} = require('../controllers/userController')
const methodNotAllowed = require('../middleware/methodNotAllowed')


router.get('/:userId', userFetchData)
router.patch('/:userId', userUpdateData)
router.delete('/:userId', userDeleteData)


// Method Not Allowed
router.all('/:userId', methodNotAllowed)


module.exports = router