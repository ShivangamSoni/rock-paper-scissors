import { useAtom } from 'jotai';

import { gameModeAtom } from '@store/index';

import Button from '@components/Button';

export default function ModeSelector() {
  const [_, setGameMode] = useAtom(gameModeAtom);

  return (
    <section className="flex items-center justify-center text-center">
      <div>
        <h2 className="text-4xl md:text-6xl uppercase tracking-wider">
          Select Game Mode
        </h2>

        <div className="flex flex-col items-center justify-evenly gap-4 mt-6">
          <Button onClick={() => setGameMode('basic')}>
            Rock Paper Scissors
          </Button>
          <Button onClick={() => setGameMode('special')}>
            Rock Paper Scissors Lizard Spock
          </Button>
        </div>
      </div>
    </section>
  );
}
