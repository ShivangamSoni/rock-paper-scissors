import { useAtom } from 'jotai';

import { gameModeAtom } from '@store/index';

import Button from '@components/Button';

export default function ModeSelector() {
  const [_, setGameMode] = useAtom(gameModeAtom);

  return (
    <section className="flex items-center justify-center text-center">
      <div>
        <h2 className="text-3xl uppercase tracking-wider">Select Game Mode</h2>

        <div className="flex flex-col items-center justify-evenly gap-4 mt-6">
          <Button onClick={() => setGameMode('basic')} className="text-sm">
            Rock Paper Scissors
          </Button>
          <Button onClick={() => setGameMode('special')} className="text-sm">
            Rock Paper Scissors Lizard Spock
          </Button>
        </div>
      </div>
    </section>
  );
}
