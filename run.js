const fs = require('fs');
const Customer = require('./Customer');
const Location = require('./Location');
const IntercomOffice = require('./IntercomOffice');
const FileLineReader = require('./FileLineReader');

const filename = 'output.txt'
const customers = {};
const intercom = new IntercomOffice(53.339428, -6.257664);
const fileLineReader = new FileLineReader('customers.json');

fileLineReader.setOnLine(line => {
  const { latitude, longitude, user_id, name } = JSON.parse(line);
  const customer = new Customer(user_id, name);
  customer.setLocation(latitude, longitude);
  if (intercom.locationIsWithinCatchment(customer.location)) {
    customers[customer.id] = customer;
  }
});

fileLineReader.setOnClose(() => {
  const logger = fs.createWriteStream(filename);
  Object.keys(customers).forEach(key => {
    logger.write(customers[key].toString());
  });
});

