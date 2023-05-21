import { scoreAtom } from '@store/index';
import { useAtom } from 'jotai';

export default function Header() {
  const [score] = useAtom(scoreAtom);

  return (
    <header className="flex justify-between outline outline-neutral-outline p-8 rounded-xl">
      <h1>
        <span className="sr-only">Rock Paper Scissors</span>
        <img src="/logo.svg" alt="" />
      </h1>

      <div className="flex items-center justify-center flex-col px-10 bg-white text-neutral-dark text-center rounded-lg">
        <span className="uppercase tracking-widest text-sm text-neutral-score">
          Score
        </span>
        <span className="text-6xl min-w-[2ch]">{score}</span>
      </div>
    </header>
  );
}
