const Customer = require('../Customer');
const { InvalidCustomerDetailsError } = require('../Errors');

describe('Customer', () => {
  it('initialises with id and name', () => {
    const customer = new Customer(1, 'Phil Mitchell');
    expect(customer.id).toEqual(1);
    expect(customer.name).toEqual('Phil Mitchell');
  });

  it('throws an error if instaniated with bad arguments', () => {
    try {
      new Customer(1);
      expect(true).toEqual(false);
    } catch(error) {
      expect(error.constructor.name).toEqual('InvalidCustomerDetailsError');
    }

    try {
      new Customer(undefined, 'Phil Mitchell');
      expect(true).toEqual(false);
    } catch(error) {
      expect(error.constructor.name).toEqual('InvalidCustomerDetailsError');
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
