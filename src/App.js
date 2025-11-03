import { MissionUtils } from '@woowacourse/mission-utils';
import LottoGenerator from './domain/LottoGenerator.js';
import LottoGame from './domain/LottoGame.js';
import PrizeCalculator from './domain/PrizeCalculator.js';
import WinningNumberValidator from './domain/WinningNumberValidator.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class App {
  async run() {
    try {
      const inputView = new InputView();
      const outputView = new OutputView();

      const price = await inputView.readPrice();
      const generator = new LottoGenerator();
      const lottos = generator.generate(price);
      outputView.printLottos(lottos);

      const targetNumbers = await inputView.readTargetNumbers();
      const bonusNumber = await inputView.readBonusNumber();

      WinningNumberValidator.validateTargetNumbers(targetNumbers);
      WinningNumberValidator.validateBonusNumber(bonusNumber, targetNumbers);

      const game = new LottoGame(lottos);
      game.calculate(targetNumbers, bonusNumber);
      const result = game.getGameResult();

      const earningRate = PrizeCalculator.getEarningRate(result, price);
      outputView.printResult(result, earningRate);
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }
}

export default App;
