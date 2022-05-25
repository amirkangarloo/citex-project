'use strict'

const userFetchData = async (req, res, next) => {
    res.status(200).send('user fetch data ok')
}

const userUpdateData = async (req, res, next) => {
    res.status(200).send('user update data ok')
}

const userDeleteData = async (req, res, next) => {
    res.status(200).send('user delete data ok')
}


module.exports = {
    userFetchData,
    userUpdateData,
    userDeleteData
}