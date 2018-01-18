const Location = require('./Location');
const InvalidClassInitialisationError = require('./InvalidClassInitialisationError');

class IntercomOffice {
  constructor(latitude, longitude, catchmentArea = 100) {
    if (typeof catchmentArea !== 'number') {
      throw new InvalidClassInitialisationError();
    }
    this.location = new Location(latitude, longitude);
    this.catchmentArea = catchmentArea;
  }

  locationIsWithinCatchment(location) {
    return this.location.getDistanceFromLocation(location) <= this.catchmentArea;
  }
}

module.exports = IntercomOffice;
