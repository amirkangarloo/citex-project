'use strict'

const notFound = (req, res, next) => {
    res.status(404).send({
        message: 'Route does not exist',
        status: 404
    })
}

module.exports = notFound