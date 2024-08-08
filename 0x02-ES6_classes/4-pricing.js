import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = this._validateAmount(amount);
    this._currency = this._validateCurrency(currency);
  }

  // Validate and set amount
  _validateAmount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    return value;
  }

  // Validate and set currency
  _validateCurrency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }
    return value;
  }

  // Getter and setter for amount
  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = this._validateAmount(value);
  }

  // Getter and setter for currency
  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._currency = this._validateCurrency(value);
  }

  // Method to display full price
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static method to convert price
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Both amount and conversionRate must be numbers');
    }
    return amount * conversionRate;
  }
}
