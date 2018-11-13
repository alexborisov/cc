const _ = require('lodash')

class DB {
  constructor(data = []) {
    this.db = data
  }
  find(query = {}) {
    return _.filter(this.db, query) || []
  }
  findByName(name) {
    return _.find(this.db, {name})
  }
  insert(newCard) {
    if (_.find(this.db, {name: newCard.name})) {
      throw 'Card already exists for this name'
    } else {
      const card = {id: _.uniqueId(), ...newCard};
      this.db.push(card)
      return card
    }
  }
  updateByName(name, patch) {
    const index = _.findIndex(this.db, {name})
    if (index < 0) {
      throw 'No card for this name'
    } else {
      return this.db[index] = {...this.db[index], ...patch}
    }
  }
}

module.exports = DB
