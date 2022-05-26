'use strict'

const userModel = require('../models/userModel')
const CustomAPIError = require('../services/customErrorService')


const userFetchData = async (req, res, next) => {
    try {
        const {userId} = req.params
        const user = await userModel.findById(userId)

        // check user exist
        if (!user) {
            throw new CustomAPIError('User does not exist', 404)
        }

        // send data to the client
        res.status(200).send({
            name: user.name,
            age: user.age,
            mobile: user.mobile
        })

    } catch (error) {
        next(error)
    }
}

const userUpdateData = async (req, res, next) => {
    res.status(200).send('user update data ok')
}

const userDeleteData = async (req, res, next) => {
    try {
        const {userId} = req.params
        const user = await userModel.findByIdAndDelete(userId)

        // check user exist
        if (!user) {
            throw new CustomAPIError('User does not exist', 404)
        }

        // send data to the client
        res.status(200).send({
            message: `User by mobile number: ${user.mobile}  was deleted`
        })


    } catch (error) {
        next(error)
    }
}


module.exports = {
    userFetchData,
    userUpdateData,
    userDeleteData
}