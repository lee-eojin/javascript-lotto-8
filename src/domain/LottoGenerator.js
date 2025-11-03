import { MissionUtils } from '@woowacourse/mission-utils';
import { LOTTO, ERROR_MESSAGE } from '../constants.js';
import Lotto from './Lotto.js';

class LottoGenerator {
  generate(price) {
    this.#validatePrice(price);
    return this.#generateLottos(price / LOTTO.PRICE);
  }

  #validatePrice(price) {
    if (price < LOTTO.PRICE) {
      throw new Error(ERROR_MESSAGE.PRICE_TOO_LOW);
    }
    if (price % LOTTO.PRICE !== 0) {
      throw new Error(ERROR_MESSAGE.PRICE_NOT_UNIT);
    }
  }

  #generateLottos(count) {
    return Array.from({ length: count }, () => this.#generateLotto());
  }

  #generateLotto() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(
      LOTTO.MIN_NUMBER,
      LOTTO.MAX_NUMBER,
      LOTTO.COUNT
    );
    return new Lotto(numbers);
  }
}

export default LottoGenerator;
