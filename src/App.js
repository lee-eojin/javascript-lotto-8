import LottoGenerator from './LottoGenerator.js';
import LottoGame from './LottoGame.js';
import PrizeCalculator from './PrizeCalculator.js';
import InputView from './InputView.js';
import OutputView from './OutputView.js';

class App {
  async run() {
    const inputView = new InputView();
    const outputView = new OutputView();

    const price = await inputView.readPrice();
    const lottos = new LottoGenerator(price).generate();
    outputView.printLottos(lottos);

    const targetNumbers = await inputView.readTargetNumbers();
    const bonusNumber = await inputView.readBonusNumber();

    const game = new LottoGame(lottos);
    game.calculate(targetNumbers, bonusNumber);
    const result = game.getGameResult();

    const calculator = new PrizeCalculator(result, price);
    const earningRate = calculator.getEarningRate();
    outputView.printResult(result, earningRate);
  }
}

export default App;
