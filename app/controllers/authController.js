'use strict'

const authRegister = async (req, res, next) => {
    res.status(200).send('auth register ok')
}

const authLogin = async (req, res, next) => {
    res.status(200).send('auth login ok')
}


module.exports = {
    authRegister,
    authLogin
}