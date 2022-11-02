/* eslint-disable no-unused-vars */
const express = require('express')
const { router } = require('./routes/router')

const app = express()

// middlewares
app.use(express.json())

// enrutador general de api
app.use('/api', router)

// manejo de erorr 404, no encontrado
app.use('*', (req, res) => {
    return res.status(404).json({
        error: 404,
        message: 'not found',
    })
})

// manejo de excepciones
app.use((err, req, res, _next) => {
    console.log(err)
    res.status(500).json({
        error: err,
    })
})

module.exports = app
