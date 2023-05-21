import { Helmet } from 'react-helmet-async';
import { useAtom } from 'jotai';
import { gameModeAtom, scoreAtom } from '@store/index';

export default function Header() {
  const [gameMode] = useAtom(gameModeAtom);
  const [score] = useAtom(scoreAtom);

  const title =
    gameMode === 'special'
      ? 'Rock Paper Scissors Lizard Spock'
      : 'Rock Paper Scissors';

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link
          rel="icon"
          type="image/svg+xml"
          href={gameMode === 'special' ? '/logo-bonus.svg' : '/logo.svg'}
        />
      </Helmet>

      <header className="flex justify-between outline outline-neutral-outline p-8 rounded-xl">
        <h1>
          <span className="sr-only">{title}</span>
          <img
            src={gameMode === 'special' ? '/logo-bonus.svg' : '/logo.svg'}
            alt=""
          />
        </h1>

        <div className="flex items-center justify-center flex-col px-10 bg-white text-neutral-dark text-center rounded-lg">
          <span className="uppercase tracking-widest text-sm text-neutral-score">
            Score
          </span>
          <span className="text-6xl min-w-[2ch]">{score}</span>
        </div>
      </header>
    </>
  );
}
