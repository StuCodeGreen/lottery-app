interface LotteryBallsProps {
  qty: number;
  selectLimit: number;
  currSelectedNum: number[];
  setCurrSelectedNum: (nums: number[]) => void;
  limitMsg: boolean;
  setLimitMsg: (msg: boolean) => void;
}

export default function LotteryBalls(props: LotteryBallsProps) {
  const {
    qty,
    selectLimit,
    currSelectedNum,
    setCurrSelectedNum,
    limitMsg,
    setLimitMsg,
  } = props;

  function handleClick(event: React.MouseEvent) {
    const ballValue = Number((event.target as HTMLButtonElement).value);
    const isSelected = currSelectedNum.includes(ballValue);
    // Check if selected limit is not reached and if ball is selected
    if (currSelectedNum.length < selectLimit && !isSelected) {
      // Add new selected ball
      setCurrSelectedNum([...currSelectedNum, ballValue]);
    } else {
      // If ball is selected deslect it and remove limit message
      if (isSelected) {
        setLimitMsg(false);
        setCurrSelectedNum(
          currSelectedNum.filter((num) => {
            return num !== ballValue;
          })
        );
      } else {
        // Displays limit message
        setLimitMsg(true);
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
      {limitMsg === true ? (
        <p>You have reached limit, please deselect one of the numbers</p>
      ) : null}
      <div className='lottery-balls'>{createLotteryBalls(qty)}</div>
    </div>
  );
}
