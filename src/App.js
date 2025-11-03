import { MissionUtils } from '@woowacourse/mission-utils';
import LottoGenerator from './domain/LottoGenerator.js';
import LottoGame from './domain/LottoGame.js';
import PrizeCalculator from './domain/PrizeCalculator.js';
import WinningNumbers from './domain/WinningNumbers.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class App {
  #inputView = new InputView();
  #outputView = new OutputView();

  async run() {
    try {
      const price = await this.#inputView.readPrice();
      const lottos = this.#purchaseLottos(price);
      const winningNumbers = await this.#readWinningNumbers();
      this.#printResult(lottos, winningNumbers, price);
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }

  #purchaseLottos(price) {
    const generator = new LottoGenerator();
    const lottos = generator.generate(price);
    this.#outputView.printLottos(lottos);
    return lottos;
  }

  async #readWinningNumbers() {
    const targetNumbers = await this.#inputView.readTargetNumbers();
    const bonusNumber = await this.#inputView.readBonusNumber();
    return new WinningNumbers(targetNumbers, bonusNumber);
  }

  #printResult(lottos, winningNumbers, price) {
    const game = new LottoGame(lottos);
    game.calculate(winningNumbers);
    const result = game.getGameResult();
    const earningRate = PrizeCalculator.getEarningRate(result, price);
    this.#outputView.printResult(result, earningRate);
  }
}

export default App;
