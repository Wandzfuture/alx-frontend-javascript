import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft); // Initialize sqft in the parent class
    this._floors = this._validateFloors(floors);
  }

  // Validate and set floors
  _validateFloors(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Floors must be a number');
    }
    return value;
  }

  // Getter for sqft (inherited from Building)
  get sqft() {
    return super.sqft;
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  // Override evacuationWarningMessage
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
