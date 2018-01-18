const IntercomOffice = require('../IntercomOffice');
const Location = require('../Location');
const { InvalidCatchmentAreaError } = require('../Errors');

describe('IntercomOffice', () => {
  it('initialises with location coordinates and catchment area', () => {
    const intercomOffice = new IntercomOffice(53.339428, -6.257664, 50);
    expect(intercomOffice.latitude).toEqual(53.339428);
    expect(intercomOffice.longitude).toEqual(-6.257664);
    expect(intercomOffice.catchmentArea).toEqual(50);
  });

  it('initialises with default catchment area', () => {
    const intercomOffice = new IntercomOffice(53.339428, -6.257664);
    expect(intercomOffice.catchmentArea).toEqual(100);
  });

  it('throws an initialisation error if instaniated with bad arguments', () => {
    try {
      new IntercomOffice(53.339428, -6.257664, null);
      expect(true).toEqual(false);
    } catch(error) {
      expect(error.constructor.name).toEqual('InvalidCatchmentAreaError');
    }
  });

  it('tests whether a location is within the catchment area', () => {
    const intercomOffice = new IntercomOffice(53.339428, -6.257664);
    const withinCatchment = new Location('52.986375', -6.043701);
    const outsideCatchment = new Location(51.92893, '-10.27699');
    expect(intercomOffice.locationIsWithinCatchment(withinCatchment)).toEqual(true);
    expect(intercomOffice.locationIsWithinCatchment(outsideCatchment)).toEqual(false);
  });

});
