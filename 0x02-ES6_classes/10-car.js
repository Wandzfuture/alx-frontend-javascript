const cloneSymbol = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const CloneConstructor = Object.getPrototypeOf(this).constructor;
    return new CloneConstructor[cloneSymbol]();
  }

  [cloneSymbol]() {
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
