import { PRIZE_MONEY, RANK } from '../constants.js';

class PrizeCalculator {
  static getWinMoney(result) {
    return Object.values(RANK).reduce((total, rank) => {
      return total + result[rank] * PRIZE_MONEY[rank];
    }, 0);
  }

  static getEarningRate(result, purchaseAmount) {
    const winMoney = this.getWinMoney(result);
    const rate = (winMoney / purchaseAmount) * 100;
    return Math.round(rate * 10) / 10;
  }
}

export default PrizeCalculator;
