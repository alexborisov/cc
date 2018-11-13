const test = require('tape')
const DB = require('./db')

test('find', t => {
  const mockData = [{name: 'test1', number: '1234'}, {name: 'test2', number: '34567'}]
  const db = new DB(mockData)
  t.deepEqual(db.find({name: 'test1'}), [mockData[0]])
  t.end()
})

test('findByName', t => {
  const mockData = [{name: 'test1', number: '1234'}, {name: 'test2', number: '34567'}]
  const db = new DB(mockData)
  t.deepEqual(db.findByName('test2'), mockData[1])
  t.end()
})

test('insert', t => {
  const mockData = [{name: 'test1', number: '1234'}]
  const db = new DB(mockData)
  const newCard = {name:'test3', number: '9999'}
  const {id, ...result} = db.insert(newCard)
  t.deepEqual(result, {...newCard})
  t.throws(() => db.insert(newCard))
  t.end()
})

test('update', t => {
  const mockData = [{name: 'test1', number: '1234'}]
  const db = new DB(mockData)
  t.deepEqual(db.updateByName('test1', {balance: 100}), {...mockData[0], balance: 100})
  t.throws(() => db.updateByName('test2'))
  t.end()
})
