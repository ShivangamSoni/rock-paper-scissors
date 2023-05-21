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

      <header className="flex justify-between outline outline-neutral-outline p-4 sm:p-6 md:p-8 rounded-sm sm:rounded-xl">
        <h1>
          <span className="sr-only">{title}</span>
          <img
            className="w-20 sm:w-auto"
            src={gameMode === 'special' ? '/logo-bonus.svg' : '/logo.svg'}
            alt=""
          />
        </h1>

        <div className="flex items-center justify-center flex-col px-5 sm:px-10 bg-white text-neutral-dark text-center rounded-sm sm:rounded-lg">
          <span className="uppercase tracking-widest text-xs sm:text-sm text-neutral-score">
            Score
          </span>
          <span className="text-3xl sm:text-4xl md:text-6xl min-w-[2ch]">
            {score}
          </span>
        </div>
      </header>
    </>
  );
}
