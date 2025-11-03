import { RANK, MATCH_COUNT } from '../constants.js';

class LottoGame {
  #lottos;
  #result;

  constructor(lottos) {
    this.#lottos = lottos;
    this.#result = this.#initResult();
  }

  calculate(winningNumbers) {
    this.#resetResult();
    this.#lottos.forEach(lotto => {
      const rank = this.#getRank(lotto, winningNumbers);
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

  #getRank(lotto, winningNumbers) {
    const correctCount = lotto.getCorrectNumber(winningNumbers.getTargetNumbers());
    const hasBonus = lotto.hasBonusNumber(winningNumbers.getBonusNumber());

    if (correctCount === MATCH_COUNT.FIRST) return RANK.FIRST;
    if (correctCount === MATCH_COUNT.SECOND && hasBonus) return RANK.SECOND;
    if (correctCount === MATCH_COUNT.THIRD) return RANK.THIRD;
    if (correctCount === MATCH_COUNT.FOURTH) return RANK.FOURTH;
    if (correctCount === MATCH_COUNT.FIFTH) return RANK.FIFTH;

    return null;
  }
}

export default LottoGame;
