'use strict'

const tokenService = require('../services/tokenService')
const CustomAPIError = require('../services/customErrorService')


module.exports = (req, res, next) => {
    const {userId} = req.params
    
    // check an authorization exist on header
    if (!('authorization' in req.headers)) {
        throw new CustomAPIError('You are not authorized!', 401)
    }

    // split Bearer and token
    const [,token] = req.headers.authorization.split(' ')
    const payload = tokenService.verify(token)
    
    // check a payload is valid
    if (!payload) {
        throw new CustomAPIError('You are not authorized!', 401)
    }

    // check userId on url and userId on JWT be same
    if (payload.id !== userId) {
        throw new CustomAPIError('You are not authorized!', 401)
    }
    

    next()
}