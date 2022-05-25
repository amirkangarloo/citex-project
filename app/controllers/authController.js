'use strict'

const userModel = require('../models/userModel')
const checkPasswordSameService = require('../services/checkPasswordSameService')
const passwordValidationService = require('../services/passwordValidationService')
const hashService = require('../services/hashService')


const authRegister = async (req, res, next) => {
    try {
        const {
            name,
            age,
            mobile,
            password,
            rePassword
        } = req.body

        // password validation
        checkPasswordSameService(password, rePassword)
        passwordValidationService(password)
        

        const newUser = new userModel({
            name,
            age,
            mobile,
            password: hashService.hashPassword(password)
        })
        await newUser.save()

        res.status(201).send({
            id: newUser._id,
            mobile
        })
    } catch (error) {
        console.log(error);
        next(error)
    }
}

const authLogin = async (req, res, next) => {
    res.status(200).send('auth login ok')
}


module.exports = {
    authRegister,
    authLogin
}