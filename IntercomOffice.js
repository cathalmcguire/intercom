const Location = require('./Location');

class IntercomOffice {
  constructor(latitude, longitude, catchmentArea = 100) {
    this.location = new Location(latitude, longitude);
    this.catchmentArea = catchmentArea;
  }

  locationIsWithinCatchment(location) {
    return this.location.getDistanceFromLocation(location) <= 100;
  }
}

module.exports = IntercomOffice;
