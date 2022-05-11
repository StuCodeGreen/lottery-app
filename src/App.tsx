import { useState } from 'react';
import LotteryBalls from './components/LotteryBalls';

import './App.css';


function App() {

  const [selectLimit, setSelectLimit] = useState<number>(6);
  const [qty, setQty] = useState<number>(59);
  const [currSelectedNum, setCurrSelectedNum] = useState<number[]>([]);

  return (
    <div className="App">
<h1>Lottery🚀</h1>
<LotteryBalls
        qty={qty}
        selectLimit={selectLimit}
        currSelectedNum={currSelectedNum}
        setCurrSelectedNum={setCurrSelectedNum}

      />
    </div>
  );
}

export default App;
