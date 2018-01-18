const { InvalidCoordinatesError } = require('./Errors');
const { PI, cos, asin, sqrt } = Math;
const radianConvertor = PI / 180;

class Location {
  constructor(latitude, longitude) {
    if (!latitude || !longitude) {
      throw new InvalidCoordinatesError();
    }
    this.latitude = parseFloat(latitude);
    this.longitude = parseFloat(longitude);
  }

  getDistanceFromCoords(latitude, longitude) {
    return 12742 * asin(sqrt(
      0.5 - cos((latitude - this.latitude) * radianConvertor) / 2 + cos(this.latitude * radianConvertor) * 
      cos(latitude * radianConvertor) * (1 - cos((longitude - this.longitude) * radianConvertor)) / 2
    ));
  }

  getDistanceFromLocation({ latitude, longitude }) {
    return this.getDistanceFromCoords(latitude, longitude);
  }
}

module.exports = Location;
