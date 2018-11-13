const test = require('tape')
const parseFx = require('./parseFx')

test('Parse string amount to number', t => {
  t.equal(parseFx('£20.10'), 20.1)
  t.equal(parseFx('£100'), 100)
  t.equal(parseFx('£43.4256'), 43.43)
  t.end()
})
