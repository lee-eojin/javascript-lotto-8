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
    const ranks = ['FIFTH', 'FOURTH', 'THIRD', 'SECOND', 'FIRST'];
    ranks.forEach(rank => {
      MissionUtils.Console.print(`${OUTPUT_MESSAGE.MATCH_RESULT[rank]} - ${result[rank]}개`);
    });
  }

  #printEarningRate(earningRate) {
    MissionUtils.Console.print(OUTPUT_MESSAGE.EARNING_RATE(earningRate));
  }
}

export default OutputView;
