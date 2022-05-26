'use strict'

const userModel = require('../models/userModel')
const checkPasswordSameService = require('../services/checkPasswordSameService')
const passwordValidationService = require('../services/passwordValidationService')
const hashService = require('../services/hashService')
const tokenService = require('../services/tokenService')
const CustomAPIError = require('../services/customErrorService')


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
        next(error)
    }
}

const authLogin = async (req, res, next) => {
    try {
        const {
            mobile,
            password
        } = req.body

        const user = await userModel.findOne({mobile})
        
        // if mobile is not valid
        if (!user) {
            throw new CustomAPIError('Mobile or Password is not correct', 404)
        }

        // password validation
        if (hashService.comparePassword(password, user.password) === false) {
            throw new CustomAPIError('Mobile or Password is not correct', 404)
        }

        // make token (jwt)
        const token = tokenService.sing({
            id: user._id
        })

        // send token for client
        res.status(200).send({
            accessToken: `Bearer ${token}`
        })

    } catch (error) {
        next(error)
    }
}


module.exports = {
    authRegister,
    authLogin
}