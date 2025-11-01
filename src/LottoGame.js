class LottoGame {
  #lottos;
  #result;

  constructor(lottos) {
    this.#lottos = lottos;
    this.#result = this.#initResult();
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
      FIRST: 0,
      SECOND: 0,
      THIRD: 0,
      FOURTH: 0,
      FIFTH: 0
    };
  }

  #resetResult() {
    this.#result = this.#initResult();
  }

  #getRank(lotto, targetNumbers, bonusNumber) {
    const correctCount = lotto.getCorrectNumber(targetNumbers);
    const hasBonus = lotto.hasBonusNumber(bonusNumber);

    if (correctCount === 6) return 'FIRST';
    if (correctCount === 5 && hasBonus) return 'SECOND';
    if (correctCount === 5) return 'THIRD';
    if (correctCount === 4) return 'FOURTH';
    if (correctCount === 3) return 'FIFTH';

    return null;
  }
}

export default LottoGame;
