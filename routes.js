const express = require('express')
const DB = require('./DB')
const Cards = require('./Cards')

const router = express.Router()
const db = new DB()
const cards = new Cards(db);

router.post('/cards', (req, res) => {
  cards.add(req.body)
    .then(card => res.send(card))
    .catch(error => {
      res.status(400)
      res.send({error})
    })
})

router.post('/cards/charge', (req, res) => {
  cards.charge(req.body.name, req.body.amount)
  .then(result => {
    res.send(result)
  })
  .catch(error => {
    res.status(400)
    res.send({error})
  })
})

router.post('/cards/credit', (req, res) => {
  cards.credit(req.body.name, req.body.amount)
  .then(result => {
    res.send(result)
  })
  .catch(error => {
    res.status(400)
    res.send({error})
  })
})

router.get('/cards', (req, res) => {
  cards.getAll().then(result => res.send(result))
})

module.exports = router
