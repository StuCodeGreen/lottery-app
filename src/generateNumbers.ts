function generateLotteryNumbers(qty: number, range: number) {
  //Creates lucky lottery numbers
  function lotteryNum() {
    return Math.ceil(Math.random() * range);
  }

  // Create lucky number and check if there is no duplicate
  function createLuckyNumber(newNumber: number, numbers: number[]) {
    if (!numbers.includes(newNumber)) {
      numbers = numbers.slice();
      numbers.push(newNumber);
    }
    return numbers;
  }
  //Store luckynumbers
  let luckyLotteryNumbers: number[] = [];

  //Create lucky numbers for specified quantity
  while (luckyLotteryNumbers.length < qty) {
    luckyLotteryNumbers = createLuckyNumber(lotteryNum(), luckyLotteryNumbers);
  }
  // Sort lucky numbers in order and return them
  return luckyLotteryNumbers.sort((a, b) => a - b);
}

export default generateLotteryNumbers;
