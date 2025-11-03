import { RANK, MATCH_COUNT, LOTTO, ERROR_MESSAGE } from '../constants.js';

class LottoGame {
  #lottos;
  #result;

  constructor(lottos) {
    this.#lottos = lottos;
    this.#result = this.#initResult();
  }

  calculate(targetNumbers, bonusNumber) {
    this.#validateTargetNumbers(targetNumbers);
    this.#validateBonusNumber(bonusNumber, targetNumbers);
    this.#resetResult();
    this.#lottos.forEach(lotto => {
      const rank = this.#getRank(lotto, targetNumbers, bonusNumber);
      if (rank) {
        this.#result[rank]++;
      }
    });
  }

  #validateTargetNumbers(numbers) {
    this.#validateNumberFormat(numbers);
    this.#validateTargetCount(numbers);
    this.#validateNumberRange(numbers);
    this.#validateDuplicateTarget(numbers);
  }

  #validateBonusNumber(number, targetNumbers) {
    this.#validateSingleNumberFormat(number);
    this.#validateSingleNumberRange(number);
    this.#validateBonusDuplicate(number, targetNumbers);
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

  #validateSingleNumberFormat(number) {
    if (isNaN(number)) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER_FORMAT);
    }
  }

  #validateSingleNumberRange(number) {
    if (number < LOTTO.MIN_NUMBER || number > LOTTO.MAX_NUMBER) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER_RANGE);
    }
  }

  #validateBonusDuplicate(number, targetNumbers) {
    if (targetNumbers.includes(number)) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_BONUS_NUMBER);
    }
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
