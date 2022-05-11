import LotteryScore from './LotteryScore';
interface WinningNumbersProps {
  winningNumbers: number[];
  playedNumbers: number[];
}

// Compare lucky numbers with selected numbers
function findMatchingNumbers(nums1: number[], nums2: number[]) {
  let matchingNumbers: number[] = nums1.filter((num) => {
    return nums2.includes(num);
  });
  return matchingNumbers.sort((a, b) => a - b);
}

function WinningNumbers(props: WinningNumbersProps) {
  const { winningNumbers, playedNumbers } = props;

  const matchingNumbers: number[] = findMatchingNumbers(
    playedNumbers,
    winningNumbers
  );

  function buildWinningNumbers() {
    return winningNumbers.map((num, index) => {
      const className = `lucky-number ${
        matchingNumbers.includes(num) ? ' matched-number' : ''
      }`;
      const style = {
        animationDelay: `${index * 0.4}s`,
      };
      return (
        <button className={className} style={style} key={index}>
          {num}
        </button>
      );
    });
  }

  return (
    <div>
      <h2>Winning Numbers</h2>
      <div className='winning-numbers'>{buildWinningNumbers()}</div>
      <LotteryScore matchedNum={matchingNumbers} />
    </div>
  );
}

export default WinningNumbers;
