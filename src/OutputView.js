import { MissionUtils } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from './constants.js';

class OutputView {
  printLottos(lottos) {
    MissionUtils.Console.print(OUTPUT_MESSAGE.PURCHASE_COUNT(lottos.length));
    lottos.forEach(lotto => {
      MissionUtils.Console.print(JSON.stringify(lotto.getLottoNumber()));
    });
  }

  printResult(result, earningRate) {
    MissionUtils.Console.print(OUTPUT_MESSAGE.WINNING_STATISTICS);
    MissionUtils.Console.print(`${OUTPUT_MESSAGE.MATCH_RESULT.FIFTH} - ${result.FIFTH}개`);
    MissionUtils.Console.print(`${OUTPUT_MESSAGE.MATCH_RESULT.FOURTH} - ${result.FOURTH}개`);
    MissionUtils.Console.print(`${OUTPUT_MESSAGE.MATCH_RESULT.THIRD} - ${result.THIRD}개`);
    MissionUtils.Console.print(`${OUTPUT_MESSAGE.MATCH_RESULT.SECOND} - ${result.SECOND}개`);
    MissionUtils.Console.print(`${OUTPUT_MESSAGE.MATCH_RESULT.FIRST} - ${result.FIRST}개`);
    MissionUtils.Console.print(OUTPUT_MESSAGE.EARNING_RATE(earningRate));
  }
}

export default OutputView;
