import Lotto from "../src/domain/Lotto";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 1보다 작으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([0, 1, 2, 3, 4, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 45보다 크면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 오름차순으로 정렬된다.", () => {
    const lotto = new Lotto([6, 5, 4, 3, 2, 1]);
    expect(lotto.getLottoNumber()).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("당첨 번호와 일치하는 개수를 반환한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.getCorrectNumber([1, 2, 3, 7, 8, 9])).toBe(3);
  });

  test("당첨 번호와 일치하는 개수가 없으면 0을 반환한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.getCorrectNumber([7, 8, 9, 10, 11, 12])).toBe(0);
  });

  test("보너스 번호가 포함되어 있으면 true를 반환한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.hasBonusNumber(6)).toBe(true);
  });

  test("보너스 번호가 포함되어 있지 않으면 false를 반환한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.hasBonusNumber(7)).toBe(false);
  });
});
