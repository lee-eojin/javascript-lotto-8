import { PRIZE_MONEY, RANK } from './constants.js';

class PrizeCalculator {
  #result;
  #purchaseAmount;

  constructor(result, purchaseAmount) {
    this.#result = result;
    this.#purchaseAmount = purchaseAmount;
  }

  getWinMoney() {
    let totalWinMoney = 0;

    totalWinMoney += this.#result[RANK.FIRST] * PRIZE_MONEY.FIRST;
    totalWinMoney += this.#result[RANK.SECOND] * PRIZE_MONEY.SECOND;
    totalWinMoney += this.#result[RANK.THIRD] * PRIZE_MONEY.THIRD;
    totalWinMoney += this.#result[RANK.FOURTH] * PRIZE_MONEY.FOURTH;
    totalWinMoney += this.#result[RANK.FIFTH] * PRIZE_MONEY.FIFTH;

    return totalWinMoney;
  }

  getEarningRate() {
    const winMoney = this.getWinMoney();
    const rate = (winMoney / this.#purchaseAmount) * 100;
    return Math.round(rate * 10) / 10;
  }
}

export default PrizeCalculator;
