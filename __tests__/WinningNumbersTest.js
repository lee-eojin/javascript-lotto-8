import WinningNumbers from "../src/domain/WinningNumbers";

describe("당첨 번호 클래스 테스트", () => {
  test("정상적인 당첨 번호와 보너스 번호로 생성된다.", () => {
    expect(() => {
      new WinningNumbers([1, 2, 3, 4, 5, 6], 7);
    }).not.toThrow();
  });

  test("보너스 번호가 당첨 번호와 중복되면 예외가 발생한다.", () => {
    expect(() => {
      new WinningNumbers([1, 2, 3, 4, 5, 6], 6);
    }).toThrow("[ERROR]");
  });

  test("당첨 번호를 반환한다.", () => {
    const winningNumbers = new WinningNumbers([1, 2, 3, 4, 5, 6], 7);
    expect(winningNumbers.getTargetNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("보너스 번호를 반환한다.", () => {
    const winningNumbers = new WinningNumbers([1, 2, 3, 4, 5, 6], 7);
    expect(winningNumbers.getBonusNumber()).toBe(7);
  });
});
