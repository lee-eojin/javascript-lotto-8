import { MissionUtils } from "@woowacourse/mission-utils";
import { LOTTO, ERROR_MESSAGE } from './constants.js';
import Lotto from './Lotto.js';

class LottoGenerator {
  #price;

  constructor(price) {
    this.#validatePrice(price);
    this.#price = price;
  }

  generate() {
    const count = this.#getLottoCount();
    return Array.from({ length: count }, () => this.#generateLotto());
  }

  #getLottoCount() {
    return this.#price / LOTTO.PRICE;
  }

  #generateLotto() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(
      LOTTO.MIN_NUMBER,
      LOTTO.MAX_NUMBER,
      LOTTO.COUNT
    );
    return new Lotto(numbers);
  }

  #validatePrice(price) {
    if (price < LOTTO.PRICE) {
      throw new Error(ERROR_MESSAGE.PRICE_TOO_LOW);
    }
    if (price % LOTTO.PRICE !== 0) {
      throw new Error(ERROR_MESSAGE.PRICE_NOT_UNIT);
    }
  }
}

export default LottoGenerator;
