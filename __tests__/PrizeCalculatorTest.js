import PrizeCalculator from "../src/domain/PrizeCalculator";

describe("상금 계산기 테스트", () => {
  test("수익률을 계산한다.", () => {
    const result = {
      FIRST: 0,
      SECOND: 0,
      THIRD: 0,
      FOURTH: 0,
      FIFTH: 1
    };
    const earningRate = PrizeCalculator.getEarningRate(result, 8000);
    expect(earningRate).toBe(62.5);
  });

  test("수익률을 소수점 둘째 자리에서 반올림한다.", () => {
    const result = {
      FIRST: 0,
      SECOND: 0,
      THIRD: 0,
      FOURTH: 0,
      FIFTH: 1
    };
    const earningRate = PrizeCalculator.getEarningRate(result, 6000);
    expect(earningRate).toBe(83.3);
  });

  test("총 당첨 금액을 계산한다.", () => {
    const result = {
      FIRST: 1,
      SECOND: 0,
      THIRD: 0,
      FOURTH: 0,
      FIFTH: 0
    };
    const winMoney = PrizeCalculator.getWinMoney(result);
    expect(winMoney).toBe(2000000000);
  });
});
