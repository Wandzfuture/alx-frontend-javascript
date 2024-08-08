import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = this._validateFloors(floors);
  }

  // Validate and set floors
  _validateFloors(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Number of floors must be a number');
    }
    return value;
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  // Override evacuationWarningMessage method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
