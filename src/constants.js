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

export const ERROR_MESSAGE = Object.freeze({
  INVALID_LOTTO_COUNT: '[ERROR] 로또 번호는 6개여야 합니다.',
  DUPLICATE_LOTTO_NUMBER: '[ERROR] 로또 번호에 중복된 숫자가 있습니다.',
  PRICE_TOO_LOW: '[ERROR] 구입 금액은 1,000원 이상이어야 합니다.',
  PRICE_NOT_UNIT: '[ERROR] 구입 금액은 1,000원 단위여야 합니다.'
});
