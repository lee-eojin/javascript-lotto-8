import { LOTTO, ERROR_MESSAGE } from './constants.js';

class Lotto {
  constructor(numbers) {
    this.#validate(numbers);
    this.numbers = numbers;
  }

  getLottoNumber() {
    return this.numbers;
  }

  getCorrectNumber(targetNumbers) {
    return this.numbers.filter(number => targetNumbers.includes(number)).length;
  }

  hasBonusNumber(bonusNumber) {
    return this.numbers.includes(bonusNumber);
  }

  #validate(numbers) {
    this.#validateLength(numbers);
    this.#validateDuplicate(numbers);
  }

  #validateLength(numbers) {
    if (numbers.length !== LOTTO.COUNT) {
      throw new Error(ERROR_MESSAGE.INVALID_LOTTO_COUNT);
    }
  }

  #validateDuplicate(numbers) {
    if (new Set(numbers).size !== numbers.length) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_LOTTO_NUMBER);
    }
  }
}

export default Lotto;
