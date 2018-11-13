const express = require('express')
const morgan = require('morgan')
const api = require('./api')

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use('/', api)

app.all('*', (req, res) => {
  res.statusCode = 404;
  res.send({message: 'resource not found'})
})

module.exports = app
