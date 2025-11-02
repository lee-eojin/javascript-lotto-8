import { MissionUtils } from '@woowacourse/mission-utils';
import LottoGenerator from './domain/LottoGenerator.js';
import LottoGame from './domain/LottoGame.js';
import PrizeCalculator from './domain/PrizeCalculator.js';
import TargetNumbers from './domain/TargetNumbers.js';
import BonusNumber from './domain/BonusNumber.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class App {
  async run() {
    try {
      const inputView = new InputView();
      const outputView = new OutputView();

      const price = await inputView.readPrice();
      const lottos = new LottoGenerator(price).generate();
      outputView.printLottos(lottos);

      const targetNumbersInput = await inputView.readTargetNumbers();
      const targetNumbers = new TargetNumbers(targetNumbersInput);

      const bonusNumberInput = await inputView.readBonusNumber();
      const bonusNumber = new BonusNumber(bonusNumberInput, targetNumbers);

      const game = new LottoGame(lottos);
      game.calculate(targetNumbers, bonusNumber);
      const result = game.getGameResult();

      const calculator = new PrizeCalculator(result, price);
      const earningRate = calculator.getEarningRate();
      outputView.printResult(result, earningRate);
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }
}

export default App;
