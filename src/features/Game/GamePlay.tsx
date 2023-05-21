import ControlButton from '@components/ControlButton';

import { Choice, Result } from '@customTypes/Game';
import { CONTROLS } from '@data/Controls';
import { getResultString } from '@util/getResultString';

export default function GamePlay({
  computerPicking,
  calculatingResult,
  result,
  playerChoice,
  computerChoice,
  onPlayAgain,
}: {
  computerPicking: boolean;
  calculatingResult: boolean;
  playerChoice: Choice;
  computerChoice: Choice | null;
  result: Result | null;
  onPlayAgain: () => void;
}) {
  const playerControl = CONTROLS.find(({ value }) => value === playerChoice);
  const computerControl = CONTROLS.find(
    ({ value }) => value === computerChoice,
  );
  return (
    <div
      className={`grid grid-cols-[auto_auto_auto] content-center justify-center space-x-24`}
    >
      <div className="flex flex-col items-center justify-between gap-12">
        <span className="uppercase">You Picked</span>
        {playerControl && (
          <ControlButton variant={playerControl.variant} disabled>
            <span className="sr-only">{playerControl.value}</span>
            <img src={playerControl.image} alt="" />
          </ControlButton>
        )}
      </div>

      <div className="flex flex-col items-center justify-between gap-12">
        <span className="uppercase">
          {computerPicking ? '' : 'The Computer Picked'}
        </span>
        {computerPicking ? (
          <div className="w-36 h-36 bg-black bg-opacity-20 rounded-full animate-bounce flex items-center justify-center text-center">
            The Computer is Picking
          </div>
        ) : (
          computerControl && (
            <ControlButton variant={computerControl.variant} disabled>
              <span className="sr-only">{computerControl.value}</span>
              <img src={computerControl.image} alt="" />
            </ControlButton>
          )
        )}
      </div>

      <div className="col-start-2 row-start-1 grid">
        {calculatingResult ? (
          <div className="flex items-center justify-center animate-ping">
            Calculating Result
          </div>
        ) : (
          result && (
            <div className="flex flex-col justify-center gap-4">
              <span className="uppercase font-bold text-7xl">
                {getResultString(result)}
              </span>
              <button
                onClick={onPlayAgain}
                className="outline-none border-none bg-white text-neutral-button text-lg py-2 rounded-md transition-colors hover:text-white hover:bg-neutral-button focus-visible:text-white focus-visible:bg-neutral-button"
              >
                Play Again
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
}
