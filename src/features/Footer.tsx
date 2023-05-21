import { useState } from 'react';
import { useAtom } from 'jotai';

import { gameModeAtom } from '@store/index';

import Rules from './Rules';

export default function Footer() {
  const [gameMode] = useAtom(gameModeAtom);
  const [showModal, setShowModal] = useState(false);

  if (!gameMode) return null;

  return (
    <>
      <footer className="flex items-center justify-center md:fixed md:bottom-8 md:right-8">
        <button
          type="button"
          className="border-none outline outline-1 outline-current py-1 px-8 rounded-lg uppercase text-lg tracking-wider hover:text-neutral-score hover:-translate-y-1 hover:font-bold hover:outline-2 focus-visible:text-neutral-score focus-visible:-translate-y-1 focus-visible:font-bold focus-visible:outline-2"
          onClick={() => setShowModal(true)}
        >
          Rules
        </button>
      </footer>

      <Rules open={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
