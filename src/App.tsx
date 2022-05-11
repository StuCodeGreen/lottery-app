import { useState } from 'react';
import LotteryBalls from './components/LotteryBalls';
import ActionButtons from './components/ActionButtons';
import './App.css';

function App() {
  const [selectLimit, setSelectLimit] = useState<number>(6);
  const [qty, setQty] = useState<number>(59);
  const [currSelectedNum, setCurrSelectedNum] = useState<number[]>([]);
  const [limitMsg, setLimitMsg] = useState(false);
  const [playedNumbers, setPlayedNumbers] = useState<number[]>([]);
  const [winningNumbers, setWinningNumbers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [isMakingSelections, setIsMakingSelections] = useState(true);

  function playLotto() {
    setPlayedNumbers(currSelectedNum);
    setShowResults(true);
    setIsMakingSelections(false);
    setLimitMsg(false);
  }

  function quickPick() {
    setShowResults(false);
    setIsMakingSelections(true);
    setLimitMsg(false);
  }

  function reset() {
    setCurrSelectedNum([]);
    setWinningNumbers([]);
    setShowResults(false);
    setIsMakingSelections(true);
    setLimitMsg(false);
  }

  return (
    <div className='App'>
      <h1>Lottery🚀</h1>
      <LotteryBalls
        qty={qty}
        selectLimit={selectLimit}
        currSelectedNum={currSelectedNum}
        setCurrSelectedNum={setCurrSelectedNum}
        limitMsg={limitMsg}
        setLimitMsg={setLimitMsg}
      />
      <ActionButtons
        reset={reset}
        quickPick={quickPick}
        playLotto={playLotto}
        currSelectedNum={currSelectedNum}
        selectLimit={selectLimit}
        isMakingSelections={isMakingSelections}
      />
    </div>
  );
}

export default App;
