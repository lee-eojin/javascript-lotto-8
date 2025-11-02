import { LOTTO, ERROR_MESSAGE } from '../constants.js';

class BonusNumber {
  #number;

  constructor(number, targetNumbers) {
    this.#validate(number);
    this.#validateDuplicate(number, targetNumbers);
    this.#number = number;
  }

  equals(number) {
    return this.#number === number;
  }

  #validate(number) {
    this.#validateFormat(number);
    this.#validateRange(number);
  }

  #validateFormat(number) {
    if (isNaN(number)) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER_FORMAT);
    }
  }

  #validateRange(number) {
    if (number < LOTTO.MIN_NUMBER || number > LOTTO.MAX_NUMBER) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER_RANGE);
    }
  }

  #validateDuplicate(number, targetNumbers) {
    if (targetNumbers.includes(number)) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_BONUS_NUMBER);
    }
  }
}

export default BonusNumber;
