import { MissionUtils } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE, ERROR_MESSAGE } from '../constants.js';

class InputView {
  async readPrice() {
    const input = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE.PRICE);
    this.#validatePriceFormat(input);
    return Number(input);
  }

  async readTargetNumbers() {
    const input = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE.TARGET_NUMBERS);
    this.#validateEmptyInput(input);
    return input.split(',').map(num => Number(num.trim()));
  }

  async readBonusNumber() {
    const input = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE.BONUS_NUMBER);
    this.#validateEmptyInput(input);
    return Number(input);
  }

  #validatePriceFormat(input) {
    this.#validateEmptyInput(input);
    if (isNaN(input)) {
      throw new Error(ERROR_MESSAGE.INVALID_PRICE_FORMAT);
    }
  }

  #validateEmptyInput(input) {
    if (input.trim() === '') {
      throw new Error(ERROR_MESSAGE.INVALID_PRICE_FORMAT);
    }
  }
}

export default InputView;
