import { MissionUtils } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from './constants.js';

class InputView {
  async readPrice() {
    const input = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE.PRICE);
    return Number(input);
  }

  async readTargetNumbers() {
    const input = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE.TARGET_NUMBERS);
    return input.split(',').map(num => Number(num.trim()));
  }

  async readBonusNumber() {
    const input = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE.BONUS_NUMBER);
    return Number(input);
  }
}

export default InputView;
