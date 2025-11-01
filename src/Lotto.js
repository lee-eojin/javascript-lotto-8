class Lotto {
  constructor(numbers) {
    this.#validate(numbers);
    this.numbers = numbers;
  }

  getLottoNumber() {
    return this.numbers;
  }

  getCorrectNumber(targetNumbers) {
    return this.numbers.filter(number => targetNumbers.includes(number)).length;
  }

  hasBonusNumber(bonusNumber) {
    return this.numbers.includes(bonusNumber);
  }

  #validate(numbers) {
    this.#validateLength(numbers);
    this.#validateDuplicate(numbers);
  }

  #validateLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  #validateDuplicate(numbers) {
    if (new Set(numbers).size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호에 중복된 숫자가 있습니다.");
    }
  }
}

export default Lotto;
