const checkCard = require('./util/checkCard')
const parseFx = require('./util/parseFx')

class Cards {
  constructor(db) {
    this.db = db
  }
  validate(card) {
    return checkCard(card.number) ? Promise.resolve(card) : Promise.reject('Card number invalid')
  }
  add(card) {
    return this.validate(card)
      .then(newCard => ({...newCard, balance: 0, limit: parseFx(newCard.limit)}))
      .then(newCard => this.db.insert(newCard))
  }
  charge(name, amount) {
    const card = this.db.findByName(name)
    if (!card) return Promise.reject('Card not found')

    const newAmount = card.balance + parseFx(amount)
    if (newAmount > card.limit) return Promise.reject(`Charge exceeds card limit (£${card.limit})`)

    const {number, balance} = this.db.updateByName(card.name, {balance: newAmount})
    return Promise.resolve({number, balance})
  }
  credit(name, amount) {
    const card = this.db.findByName(name)
    if (!card) return Promise.reject('Card not found')

    const newAmount = card.balance - parseFx(amount)
    const {number, balance} = this.db.updateByName(card.name, {balance: newAmount})

    return Promise.resolve({number, balance})
  }
  getAll() {
    return Promise.resolve(this.db.find())
  }
}

module.exports = Cards
