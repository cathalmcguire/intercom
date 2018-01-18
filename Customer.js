const Location = require('./Location');
const InvalidClassInitialisationError = require('./InvalidClassInitialisationError');

class Customer {
  constructor(id, name) {
    if (!id || !name) {
      throw new InvalidClassInitialisationError();
    }
    this.id = id;
    this.name = name;
  }

  setLocation(latitude, longitude) {
    this.location = new Location(latitude, longitude);
  }

  toString() {
    return `id: ${this.id}, name: ${this.name}\n`;
  }
}

module.exports = Customer;
