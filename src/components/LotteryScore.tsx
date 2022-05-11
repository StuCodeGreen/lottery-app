interface LotteryScoreProps {
  matchedNum: number[];
}

export default function LotteryScore(props: LotteryScoreProps) {
  const { matchedNum } = props;

  function score() {
    let score = 0;

    switch (matchedNum.length <= 6) {
      case matchedNum.length === 3:
        score = 50;
        break;
      case matchedNum.length === 4:
        score = 100;
        break;
      case matchedNum.length === 5:
        score = 200;
        break;
      case matchedNum.length === 6:
        score = 500;
        break;
      default:
        score = 0;
    }
    return `${score}`;
  }

  return <h1 className='score'>Score: {score()}</h1>;
}
