import { LOTTO, ERROR_MESSAGE } from '../constants.js';

class WinningNumbers {
  #targetNumbers;
  #bonusNumber;

  constructor(targetNumbers, bonusNumber) {
    this.#validateTargetNumbers(targetNumbers);
    this.#validateBonusNumber(bonusNumber, targetNumbers);
    this.#targetNumbers = targetNumbers;
    this.#bonusNumber = bonusNumber;
  }

  getTargetNumbers() {
    return this.#targetNumbers;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }

  #validateTargetNumbers(numbers) {
    this.#validateNumbersFormat(numbers);
    this.#validateCount(numbers);
    this.#validateRange(numbers);
    this.#validateDuplicate(numbers, ERROR_MESSAGE.DUPLICATE_TARGET_NUMBER);
  }

  #validateBonusNumber(number, targetNumbers) {
    this.#validateBonusFormat(number);
    this.#validateBonusRange(number);
    this.#validateBonusDuplicate(number, targetNumbers);
  }

  #validateNumbersFormat(numbers) {
    if (numbers.some(num => isNaN(num))) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER_FORMAT);
    }
    if (numbers.some(num => !Number.isInteger(num))) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER_INTEGER);
    }
  }

  #validateCount(numbers) {
    if (numbers.length !== LOTTO.COUNT) {
      throw new Error(ERROR_MESSAGE.INVALID_TARGET_COUNT);
    }
  }

  #validateRange(numbers) {
    const inRange = numbers.every(num => num >= LOTTO.MIN_NUMBER && num <= LOTTO.MAX_NUMBER);
    if (!inRange) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER_RANGE);
    }
  }

  #validateDuplicate(numbers, errorMessage) {
    if (new Set(numbers).size !== numbers.length) {
      throw new Error(errorMessage);
    }
  }

  #validateBonusFormat(number) {
    if (isNaN(number)) {
      throw new Error(ERROR_MESSAGE.INVALID_BONUS_FORMAT);
    }
    if (!Number.isInteger(number)) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER_INTEGER);
    }
  }

  #validateBonusRange(number) {
    if (number < LOTTO.MIN_NUMBER || number > LOTTO.MAX_NUMBER) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER_RANGE);
    }
  }

  #validateBonusDuplicate(number, targetNumbers) {
    if (targetNumbers.includes(number)) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_BONUS_NUMBER);
    }
  }
}

export default WinningNumbers;
