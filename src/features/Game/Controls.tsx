import { Choice } from '@customTypes/Game';

import ControlButton from '@components/ControlButton';
import { useAtom } from 'jotai';
import { gameModeAtom } from '@store/index';

export default function Controls({
  setChoice,
}: {
  setChoice: (choice: Choice) => void;
}) {
  const [gameMode] = useAtom(gameModeAtom);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-[65%] sm:w-[45%] lg:w-[400px] md:mt-12">
        <img
          className="w-full"
          src={
            gameMode === 'basic'
              ? '/assets/bg/bg-triangle.svg'
              : '/assets/bg/bg-pentagon.svg'
          }
          alt=""
        />

        {gameMode === 'basic' ? (
          <>
            <ControlButton
              onClick={() => setChoice('paper')}
              variant="paper"
              className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2"
            >
              <span className="sr-only">Paper</span>
              <img src="/assets/icon/icon-paper.svg" alt="" />
            </ControlButton>
            <ControlButton
              onClick={() => setChoice('scissors')}
              variant="scissors"
              className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2"
            >
              <span className="sr-only">Scissor</span>
              <img src="/assets/icon/icon-scissors.svg" alt="" />
            </ControlButton>
            <ControlButton
              onClick={() => setChoice('rock')}
              variant="rock"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
            >
              <span className="sr-only">Rock</span>
              <img src="/assets/icon/icon-rock.svg" alt="" />
            </ControlButton>
          </>
        ) : (
          <>
            <ControlButton
              onClick={() => setChoice('scissors')}
              variant="scissors"
              size="sm"
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <span className="sr-only">Scissor</span>
              <img src="/assets/icon/icon-scissors.svg" alt="" />
            </ControlButton>
            <ControlButton
              onClick={() => setChoice('spock')}
              variant="spock"
              size="sm"
              className="absolute left-0 top-1/4 -translate-x-1/2"
            >
              <span className="sr-only">Spock</span>
              <img src="/assets/icon/icon-spock.svg" alt="" />
            </ControlButton>
            <ControlButton
              onClick={() => setChoice('paper')}
              variant="paper"
              size="sm"
              className="absolute right-0 top-1/4 translate-x-1/2"
            >
              <span className="sr-only">Paper</span>
              <img src="/assets/icon/icon-paper.svg" alt="" />
            </ControlButton>
            <ControlButton
              onClick={() => setChoice('lizard')}
              variant="lizard"
              size="sm"
              className="absolute bottom-0 left-[10%] -translate-x-1/2 translate-y-1/2"
            >
              <span className="sr-only">Lizard</span>
              <img src="/assets/icon/icon-lizard.svg" alt="" />
            </ControlButton>
            <ControlButton
              onClick={() => setChoice('rock')}
              variant="rock"
              size="sm"
              className="absolute bottom-0 right-[10%] translate-x-1/2 translate-y-1/2"
            >
              <span className="sr-only">Rock</span>
              <img src="/assets/icon/icon-rock.svg" alt="" />
            </ControlButton>
          </>
        )}
      </div>
    </div>
  );
}
