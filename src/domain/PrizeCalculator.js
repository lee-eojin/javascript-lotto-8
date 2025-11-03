import { PRIZE_MONEY, RANK } from '../constants.js';

class PrizeCalculator {
  static getWinMoney(result) {
    return Object.values(RANK).reduce((total, rank) => {
      const prizeForRank = result[rank] * PRIZE_MONEY[rank];
      return total + prizeForRank;
    }, 0);
  }

  static getEarningRate(result, purchaseAmount) {
    const winMoney = this.getWinMoney(result);
    const rate = (winMoney / purchaseAmount) * 100;
    return this.#roundToFirstDecimal(rate);
  }

  static #roundToFirstDecimal(value) {
    return Math.round(value * 10) / 10;
  }
}

export default PrizeCalculator;
