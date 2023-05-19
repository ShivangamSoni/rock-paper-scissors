import Controls from './Controls';
import GamePlay from './GamePlay';

export default function Game() {
  return (
    <main className="grid">
      <Controls />
      <GamePlay
        computerPicking={false}
        calculatingResult={false}
        result={'You Win'}
      />
    </main>
  );
}
