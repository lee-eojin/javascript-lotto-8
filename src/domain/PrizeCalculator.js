import { PRIZE_MONEY, RANK } from '../constants.js';

class PrizeCalculator {
  static getWinMoney(result) {
    let totalWinMoney = 0;

    totalWinMoney += result[RANK.FIRST] * PRIZE_MONEY.FIRST;
    totalWinMoney += result[RANK.SECOND] * PRIZE_MONEY.SECOND;
    totalWinMoney += result[RANK.THIRD] * PRIZE_MONEY.THIRD;
    totalWinMoney += result[RANK.FOURTH] * PRIZE_MONEY.FOURTH;
    totalWinMoney += result[RANK.FIFTH] * PRIZE_MONEY.FIFTH;

    return totalWinMoney;
  }

  static getEarningRate(result, purchaseAmount) {
    const winMoney = this.getWinMoney(result);
    const rate = (winMoney / purchaseAmount) * 100;
    return Math.round(rate * 10) / 10;
  }
}

export default PrizeCalculator;
