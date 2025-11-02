import { MissionUtils } from '@woowacourse/mission-utils';
import { RANK, MATCH_COUNT, LOTTO, ERROR_MESSAGE } from '../constants.js';
import Lotto from './Lotto.js';

class LottoGame {
  #lottos;
  #result;

  constructor(price) {
    this.#lottos = this.#purchaseAndGenerate(price);
    this.#result = this.#initResult();
  }

  #purchaseAndGenerate(price) {
    this.#validatePrice(price);
    const count = price / LOTTO.PRICE;
    return this.#generateLottos(count);
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

  getLottos() {
    return this.#lottos;
  }

  calculate(targetNumbers, bonusNumber) {
    this.#resetResult();
    this.#lottos.forEach(lotto => {
      const rank = this.#getRank(lotto, targetNumbers, bonusNumber);
      if (rank) {
        this.#result[rank]++;
      }
    });
  }

  getGameResult() {
    return { ...this.#result };
  }

  #initResult() {
    return {
      [RANK.FIRST]: 0,
      [RANK.SECOND]: 0,
      [RANK.THIRD]: 0,
      [RANK.FOURTH]: 0,
      [RANK.FIFTH]: 0
    };
  }

  #resetResult() {
    this.#result = this.#initResult();
  }

  #getRank(lotto, targetNumbers, bonusNumber) {
    const correctCount = lotto.getCorrectNumber(targetNumbers);
    const hasBonus = lotto.hasBonusNumber(bonusNumber);

    if (correctCount === MATCH_COUNT.FIRST) return RANK.FIRST;
    if (correctCount === MATCH_COUNT.SECOND && hasBonus) return RANK.SECOND;
    if (correctCount === MATCH_COUNT.THIRD) return RANK.THIRD;
    if (correctCount === MATCH_COUNT.FOURTH) return RANK.FOURTH;
    if (correctCount === MATCH_COUNT.FIFTH) return RANK.FIFTH;

    return null;
  }
}

export default LottoGame;
