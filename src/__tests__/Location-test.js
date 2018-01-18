const Location = require('../Location');
const { InvalidCoordinatesError } = require('../Errors');

describe('Location', () => {
  it('initialises with latitude and longitude', () => {
    const location = new Location(53.339428, '-6.257664');
    expect(location.latitude).toEqual(53.339428);
    expect(location.longitude).toEqual(-6.257664);
  });

  it('throws an error if instaniated with bad arguments', () => {
    try {
      new Location(53.339428);
      expect(true).toEqual(false);
    } catch(error) {
      expect(error.constructor.name).toEqual('InvalidCoordinatesError');
    }

    try {
      new Location(null, '-6.257664');
      expect(true).toEqual(false);
    } catch(error) {
      expect(error.constructor.name).toEqual('InvalidCoordinatesError');
    }
  });

  it('gets distance from a coordinate', () => {
    const location = new Location(53.339428, '-6.257664');
    expect(location.getDistanceFromCoords('52.986375', -6.043701)).toEqual(41.768725500903436);
  });

  it('gets distance from a location', () => {
    const location = new Location(53.339428, '-6.257664');
    expect(location.getDistanceFromLocation(new Location('52.986375', -6.043701))).toEqual(41.768725500903436);
  });

});
