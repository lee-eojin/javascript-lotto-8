export const LOTTO = Object.freeze({
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  COUNT: 6,
  PRICE: 1000
});

export const MATCH_COUNT = Object.freeze({
  FIRST: 6,
  SECOND: 5,
  THIRD: 5,
  FOURTH: 4,
  FIFTH: 3
});

export const RANK = Object.freeze({
  FIRST: 'FIRST',
  SECOND: 'SECOND',
  THIRD: 'THIRD',
  FOURTH: 'FOURTH',
  FIFTH: 'FIFTH'
});

export const PRIZE_MONEY = Object.freeze({
  FIRST: 2000000000,
  SECOND: 30000000,
  THIRD: 1500000,
  FOURTH: 50000,
  FIFTH: 5000
});

export const INPUT_MESSAGE = Object.freeze({
  PRICE: '구입금액을 입력해 주세요.\n',
  TARGET_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n'
});

export const OUTPUT_MESSAGE = Object.freeze({
  PURCHASE_COUNT: (count) => `\n${count}개를 구매했습니다.`,
  WINNING_STATISTICS: '\n당첨 통계\n---',
  MATCH_RESULT: {
    FIFTH: '3개 일치 (5,000원)',
    FOURTH: '4개 일치 (50,000원)',
    THIRD: '5개 일치 (1,500,000원)',
    SECOND: '5개 일치, 보너스 볼 일치 (30,000,000원)',
    FIRST: '6개 일치 (2,000,000,000원)'
  },
  EARNING_RATE: (rate) => `총 수익률은 ${rate}%입니다.`
});

export const ERROR_MESSAGE = Object.freeze({
  INVALID_INPUT: '[ERROR] 입력값이 비어있습니다.',
  INVALID_PRICE_FORMAT: '[ERROR] 구입 금액은 숫자여야 합니다.',
  PRICE_TOO_LOW: '[ERROR] 구입 금액은 1,000원 이상이어야 합니다.',
  PRICE_NOT_UNIT: '[ERROR] 구입 금액은 1,000원 단위여야 합니다.',
  INVALID_LOTTO_COUNT: '[ERROR] 로또 번호는 6개여야 합니다.',
  DUPLICATE_LOTTO_NUMBER: '[ERROR] 로또 번호에 중복된 숫자가 있습니다.',
  INVALID_NUMBER_FORMAT: '[ERROR] 로또 번호는 숫자여야 합니다.',
  INVALID_NUMBER_INTEGER: '[ERROR] 로또 번호는 정수여야 합니다.',
  INVALID_NUMBER_RANGE: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  INVALID_TARGET_COUNT: '[ERROR] 당첨 번호는 6개여야 합니다.',
  DUPLICATE_TARGET_NUMBER: '[ERROR] 당첨 번호에 중복된 숫자가 있습니다.',
  INVALID_BONUS_FORMAT: '[ERROR] 보너스 번호는 숫자여야 합니다.',
  DUPLICATE_BONUS_NUMBER: '[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.'
});
