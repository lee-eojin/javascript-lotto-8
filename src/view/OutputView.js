import { MissionUtils } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants.js';

class OutputView {
  printLottos(lottos) {
    this.#printPurchaseCount(lottos.length);
    this.#printLottoNumbers(lottos);
  }

  printResult(result, earningRate) {
    this.#printWinningStatistics();
    this.#printRankResults(result);
    this.#printEarningRate(earningRate);
  }

  #printPurchaseCount(count) {
    MissionUtils.Console.print(OUTPUT_MESSAGE.PURCHASE_COUNT(count));
  }

  #printLottoNumbers(lottos) {
    lottos.forEach(lotto => {
      const numbers = lotto.getLottoNumber();
      MissionUtils.Console.print(`[${numbers.join(', ')}]`);
    });
  }

  #printWinningStatistics() {
    MissionUtils.Console.print(OUTPUT_MESSAGE.WINNING_STATISTICS);
  }

  #printRankResults(result) {
    MissionUtils.Console.print(`${OUTPUT_MESSAGE.MATCH_RESULT.FIFTH} - ${result.FIFTH}개`);
    MissionUtils.Console.print(`${OUTPUT_MESSAGE.MATCH_RESULT.FOURTH} - ${result.FOURTH}개`);
    MissionUtils.Console.print(`${OUTPUT_MESSAGE.MATCH_RESULT.THIRD} - ${result.THIRD}개`);
    MissionUtils.Console.print(`${OUTPUT_MESSAGE.MATCH_RESULT.SECOND} - ${result.SECOND}개`);
    MissionUtils.Console.print(`${OUTPUT_MESSAGE.MATCH_RESULT.FIRST} - ${result.FIRST}개`);
  }

  #printEarningRate(earningRate) {
    MissionUtils.Console.print(OUTPUT_MESSAGE.EARNING_RATE(earningRate));
  }
}

export default OutputView;
