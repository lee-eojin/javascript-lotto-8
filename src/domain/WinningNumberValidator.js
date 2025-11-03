import { LOTTO, ERROR_MESSAGE } from '../constants.js';

class WinningNumberValidator {
  static validateTargetNumbers(numbers) {
    this.#validateNumberFormat(numbers);
    this.#validateTargetCount(numbers);
    this.#validateNumberRange(numbers);
    this.#validateDuplicateTarget(numbers);
  }

  static validateBonusNumber(number, targetNumbers) {
    this.#validateSingleNumberFormat(number);
    this.#validateSingleNumberRange(number);
    this.#validateBonusDuplicate(number, targetNumbers);
  }

  static #validateNumberFormat(numbers) {
    if (numbers.some(num => isNaN(num))) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER_FORMAT);
    }
  }

  static #validateTargetCount(numbers) {
    if (numbers.length !== LOTTO.COUNT) {
      throw new Error(ERROR_MESSAGE.INVALID_TARGET_COUNT);
    }
  }

  static #validateNumberRange(numbers) {
    const inRange = numbers.every(num => num >= LOTTO.MIN_NUMBER && num <= LOTTO.MAX_NUMBER);
    if (!inRange) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER_RANGE);
    }
  }

  static #validateDuplicateTarget(numbers) {
    if (new Set(numbers).size !== numbers.length) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_TARGET_NUMBER);
    }
  }

  static #validateSingleNumberFormat(number) {
    if (isNaN(number)) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER_FORMAT);
    }
  }

  static #validateSingleNumberRange(number) {
    if (number < LOTTO.MIN_NUMBER || number > LOTTO.MAX_NUMBER) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER_RANGE);
    }
  }

  static #validateBonusDuplicate(number, targetNumbers) {
    if (targetNumbers.includes(number)) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_BONUS_NUMBER);
    }
  }
}

export default WinningNumberValidator;
