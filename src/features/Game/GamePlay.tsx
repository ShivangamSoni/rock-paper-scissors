import { Choice, Result } from '@customTypes/Game';

import { CONTROLS } from '@data/Controls';
import { getResultString } from '@util/getResultString';

import ControlButton from '@components/ControlButton';
import Button from '@components/Button';
import { useAtom } from 'jotai';
import { gameModeAtom } from '@store/index';

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
  const [_, setGameMode] = useAtom(gameModeAtom);
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
              <Button onClick={onPlayAgain}>Play Again</Button>
              <Button onClick={() => setGameMode(null)}>
                Change Game Mode
              </Button>
            </div>
          )
        )}
      </div>
    </div>
  );
}
