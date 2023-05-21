import { useAtom } from 'jotai';

import { gameModeAtom } from '@store/index';

import ModeSelector from './ModeSelector';
import Game from './Game';

export default function GameScreen() {
  const [gameMode] = useAtom(gameModeAtom);

  return (
    <main className="grid">{!gameMode ? <ModeSelector /> : <Game />}</main>
  );
}
