import LottoGenerator from "../src/domain/LottoGenerator";

describe("로또 생성기 테스트", () => {
  test("구입 금액만큼 로또를 생성한다.", () => {
    const generator = new LottoGenerator();
    const lottos = generator.generate(3000);
    expect(lottos).toHaveLength(3);
  });

  test("구입 금액이 1000원 미만이면 예외가 발생한다.", () => {
    const generator = new LottoGenerator();
    expect(() => {
      generator.generate(500);
    }).toThrow("[ERROR]");
  });

  test("구입 금액이 1000원 단위가 아니면 예외가 발생한다.", () => {
    const generator = new LottoGenerator();
    expect(() => {
      generator.generate(1500);
    }).toThrow("[ERROR]");
  });
});
