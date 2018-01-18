const Location = require('./Location');
const { InvalidCatchmentAreaError } = require('./Errors');

class IntercomOffice extends Location{
  constructor(latitude, longitude, catchmentArea = 100) {
    if (typeof catchmentArea !== 'number') {
      throw new InvalidCatchmentAreaError();
    }
    super(latitude, longitude);
    this.catchmentArea = catchmentArea;
  }

  locationIsWithinCatchment(location) {
    return this.getDistanceFromLocation(location) <= this.catchmentArea;
  }
}

module.exports = IntercomOffice;
