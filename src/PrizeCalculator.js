class PrizeCalculator {
  #result;
  #purchaseAmount;
  #prizeMoney;

  constructor(result, purchaseAmount) {
    this.#result = result;
    this.#purchaseAmount = purchaseAmount;
    this.#prizeMoney = {
      FIRST: 2000000000,
      SECOND: 30000000,
      THIRD: 1500000,
      FOURTH: 50000,
      FIFTH: 5000
    };
  }

  getWinMoney() {
    let totalWinMoney = 0;

    totalWinMoney += this.#result.FIRST * this.#prizeMoney.FIRST;
    totalWinMoney += this.#result.SECOND * this.#prizeMoney.SECOND;
    totalWinMoney += this.#result.THIRD * this.#prizeMoney.THIRD;
    totalWinMoney += this.#result.FOURTH * this.#prizeMoney.FOURTH;
    totalWinMoney += this.#result.FIFTH * this.#prizeMoney.FIFTH;

    return totalWinMoney;
  }

  getEarningRate() {
    const winMoney = this.getWinMoney();
    const rate = (winMoney / this.#purchaseAmount) * 100;
    return Math.round(rate * 10) / 10;
  }
}

export default PrizeCalculator;
