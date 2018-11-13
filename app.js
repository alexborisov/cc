const express = require('express')
const morgan = require('morgan')
const routes = require('./routes')

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use('/', routes)

app.all('*', (req, res) => {
  res.statusCode = 404
  res.send({ message: 'resource not found' })
})

module.exports = app
