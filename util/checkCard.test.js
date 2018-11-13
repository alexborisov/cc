const test = require('tape')
const checkCard = require('./checkCard')

test('Should validate Visa', t => {
  t.ok(checkCard('4929573259759450'))
  t.ok(checkCard('492 996793 974 4538'))
  t.end()
})

test('Should validate MasterCard', t => {
  t.ok(checkCard('5426330547106795'))
  t.ok(checkCard('550 341 818 820 4338'))
  t.end()
})

test('Should validate Maestro', t => {
  t.ok(checkCard('6762207124563699'))
  t.ok(checkCard('   50387 19045 671922 '))
  t.end()
})

test('Should fail', t => {
  t.notOk(checkCard('123456789012345'))
  t.notOk(checkCard('312790098817231 '))
  t.notOk(checkCard('31279^&9as881s231 '))
  t.end()
})
