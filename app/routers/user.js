'use strict'

const express = require('express')
const router = express.Router()
const {
    userFetchData,
    userUpdateData,
    userDeleteData
} = require('../controllers/userController')


router.get('/:userId', userFetchData)
router.patch('/:userId', userUpdateData)
router.delete('/:userId', userDeleteData)


module.exports = router