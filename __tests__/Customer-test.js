const Customer = require('../Customer');
const InvalidClassInitialisationError = require('../InvalidClassInitialisationError');

describe('Customer', () => {
  it('initialises with id and name', () => {
    const customer = new Customer(1, 'Phil Mitchell');
    expect(customer.id).toEqual(1);
    expect(customer.name).toEqual('Phil Mitchell');
  });

  it('throws an initialisation error if instaniated with bad arguments', () => {
    try {
      new Customer(1);
      expect(true).toEqual(false);
    } catch(error) {
      expect(error.constructor.name).toEqual('InvalidClassInitialisationError');
    }

    try {
      new Customer(undefined, 'Phil Mitchell');
      expect(true).toEqual(false);
    } catch(error) {
      expect(error.constructor.name).toEqual('InvalidClassInitialisationError');
    }
  });

  it('sets location', () => {
    const customer = new Customer(1, 'Phil Mitchell');
    customer.setLocation(53.339428, -6.257664);
    expect(customer.location.constructor.name).toEqual('Location');
  });

  it('writes id and name to string', () => {
    const customer = new Customer(1, 'Phil Mitchell');
    expect(customer.toString()).toEqual('id: 1, name: Phil Mitchell\n');
  });
});
