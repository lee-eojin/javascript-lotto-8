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
    this.#validateTargetNumbersFormat(numbers);
    this.#validateTargetNumbersCount(numbers);
    this.#validateTargetNumbersRange(numbers);
    this.#validateTargetNumbersDuplicate(numbers);
  }

  #validateBonusNumber(number, targetNumbers) {
    this.#validateBonusFormat(number);
    this.#validateBonusRange(number);
    this.#validateBonusDuplicate(number, targetNumbers);
  }

  #validateTargetNumbersFormat(numbers) {
    if (numbers.some(num => isNaN(num))) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER_FORMAT);
    }
    if (numbers.some(num => !Number.isInteger(num))) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER_INTEGER);
    }
  }

  #validateTargetNumbersCount(numbers) {
    if (numbers.length !== LOTTO.COUNT) {
      throw new Error(ERROR_MESSAGE.INVALID_TARGET_COUNT);
    }
  }

  #validateTargetNumbersRange(numbers) {
    const inRange = numbers.every(num => num >= LOTTO.MIN_NUMBER && num <= LOTTO.MAX_NUMBER);
    if (!inRange) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER_RANGE);
    }
  }

  #validateTargetNumbersDuplicate(numbers) {
    if (new Set(numbers).size !== numbers.length) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_TARGET_NUMBER);
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
