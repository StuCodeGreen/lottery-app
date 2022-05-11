interface ActionButtonProps {
  reset: () => void;
  quickPick: () => void;
  playLotto: () => void;
  currSelectedNum: number[];
  selectLimit: number;
  isMakingSelections: boolean;
}

function ActionButtons(props: ActionButtonProps) {
  const {
    reset,
    quickPick,
    playLotto,
    currSelectedNum,
    selectLimit,
    isMakingSelections,
  } = props;

  return (
    <div className='action-buttons'>
      <button type='button' className='btn' onClick={reset}>
        Reset
      </button>
      <button type='button' className='btn' onClick={quickPick}>
        Quick Pick
      </button>
      <button
        type='button'
        className='btn'
        onClick={playLotto}
        disabled={
          currSelectedNum.length !== selectLimit || isMakingSelections === false
        }
      >
        Play
      </button>
    </div>
  );
}

export default ActionButtons;
