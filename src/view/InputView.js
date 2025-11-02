import { MissionUtils } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE, ERROR_MESSAGE, LOTTO } from '../constants.js';

class InputView {
  async readPrice() {
    const input = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE.PRICE);
    this.#validatePriceFormat(input);
    return Number(input);
  }

  async readTargetNumbers() {
    const input = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE.TARGET_NUMBERS);
    const numbers = input.split(',').map(num => Number(num.trim()));
    this.#validateTargetNumbers(numbers);
    return numbers;
  }

  async readBonusNumber() {
    const input = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE.BONUS_NUMBER);
    return Number(input);
  }

  #validatePriceFormat(input) {
    if (isNaN(input) || input.trim() === '') {
      throw new Error(ERROR_MESSAGE.INVALID_PRICE_FORMAT);
    }
  }

  #validateTargetNumbers(numbers) {
    this.#validateNumberFormat(numbers);
    this.#validateTargetCount(numbers);
    this.#validateNumberRange(numbers);
    this.#validateDuplicateTarget(numbers);
  }

  #validateNumberFormat(numbers) {
    if (numbers.some(num => isNaN(num))) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER_FORMAT);
    }
  }

  #validateTargetCount(numbers) {
    if (numbers.length !== LOTTO.COUNT) {
      throw new Error(ERROR_MESSAGE.INVALID_TARGET_COUNT);
    }
  }

  #validateNumberRange(numbers) {
    const inRange = numbers.every(num => num >= LOTTO.MIN_NUMBER && num <= LOTTO.MAX_NUMBER);
    if (!inRange) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER_RANGE);
    }
  }

  #validateDuplicateTarget(numbers) {
    if (new Set(numbers).size !== numbers.length) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_TARGET_NUMBER);
    }
  }
}

export default InputView;
