const test = require('tape')
const supertest = require('supertest')
const app = require('./app')
const request = supertest(app)

test('Add new card', t => {
  t.plan(4)
  request.post('/cards')
    .send({ name: 'John Doe', number: '4929573259759450', limit: '£100' })
    .expect(200)
    .expect(response => {
      const { body } = response
      t.equal(body.name, 'John Doe')
      t.equal(body.number, '4929573259759450')
      t.equal(body.limit, 100)
      t.equal(body.balance, 0)
    }).catch(err => {
      throw (err)
    })
})

test('Charge card', t => {
  t.plan(2)
  request.post('/cards/charge')
    .send({ name: 'John Doe', amount: '£50' })
    .expect(200)
    .expect(response => {
      const { body } = response
      t.equal(body.number, '4929573259759450')
      t.equal(body.balance, 50)
    })
    .catch(err => {
      throw (err)
    })
})

test('Charge card too much', t => {
  request.post('/cards/charge')
    .send({ name: 'John Doe', amount: '£100' })
    .expect(400)
    .expect(response => {
      t.end()
    })
    .catch(err => {
      throw (err)
    })
})

test('Credit card', t => {
  t.plan(2)
  request.post('/cards/credit')
    .send({ name: 'John Doe', amount: '£50' })
    .expect(200)
    .expect(response => {
      const { body } = response
      t.equal(body.number, '4929573259759450')
      t.equal(body.balance, 0)
    })
    .catch(err => {
      throw (err)
    })
})

test('List cards', t => {
  t.plan(2)
  request.get('/cards')
    .expect(200)
    .expect(response => {
      const { body } = response
      t.equal(body.length, 1)
      t.equal(body[0].name, 'John Doe')
    })
    .catch(err => {
      throw (err)
    })
})
