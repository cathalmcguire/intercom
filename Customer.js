const Location = require('./Location');

class Customer {
  constructor(id, name) {
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
