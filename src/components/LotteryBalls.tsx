interface LotteryBallsProps {
  qty: number;
  selectLimit: number;
  currSelectedNum: number[];
  setCurrSelectedNum: (nums: number[]) => void;

}

export default function LotteryBalls(props: LotteryBallsProps) {
  const {
    qty,
    selectLimit,
    currSelectedNum,
    setCurrSelectedNum,
  } = props;

  function handleClick(event: React.MouseEvent) {
    const ballValue = Number((event.target as HTMLButtonElement).value);
    const isSelected = currSelectedNum.includes(ballValue);
    // Check if selected limit is not reached and if ball is selected
    if (currSelectedNum.length < selectLimit && !isSelected) {
      // Add new selected ball
      setCurrSelectedNum([...currSelectedNum, ballValue]);
    } else {
      if (isSelected) {
        setCurrSelectedNum(
          currSelectedNum.filter((num) => {
            return num !== ballValue;
          })
        );
      }
    }
  }

  // Build lottery balls
  function createLotteryBalls(num: number) {
    let lotteryBalls = [];

    for (let i = 1; i <= num; i++) {
      lotteryBalls.push(
        <button
          className='lotteryBall'
          type='button'
          value={`${i}`}
          aria-pressed={currSelectedNum.includes(i)}
          onClick={handleClick}
          key={i}
        >
          {i}
        </button>
      );
    }
    return lotteryBalls;
  }

  return (
    <div className='lottery-balls-wrapper'>
      <div className='lottery-balls'>{createLotteryBalls(qty)}</div>
    </div>
  );
}
