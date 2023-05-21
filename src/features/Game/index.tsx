import { useCallback, useEffect, useState } from 'react';
import { useAtom } from 'jotai';

import { gameModeAtom, scoreAtom } from '@store/index';
import { Choice, Result } from '@customTypes/Game';
import { getResult } from '@util/getResult';
import { CHOICES } from '@data/Choices';

import Controls from './Controls';
import GamePlay from './GamePlay';

export default function Game() {
  const [gameMode] = useAtom(gameModeAtom);
  const [_, setScore] = useAtom(scoreAtom);

  const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
  const [result, setResult] = useState<Result | null>(null);
  const [computerPicking, setComputerPicking] = useState(false);
  const [calculatingResult, setCalculatingResult] = useState(false);

  const calculateResult = useCallback(() => {
    if (playerChoice && computerChoice) {
      const result = getResult(gameMode!, playerChoice, computerChoice);
      setResult(result);
      setCalculatingResult(false);
      if (result === 'win') {
        setScore((prev) => prev + 1);
      } else if (result === 'lose') {
        setScore((prev) => prev - 1);
      }
    }
  }, [computerChoice, gameMode, playerChoice, setScore]);

  const playAgain = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
    setComputerPicking(false);
    setCalculatingResult(false);
  };

  useEffect(() => {
    if (playerChoice) {
      const randomIndex = Math.floor(Math.random() * CHOICES.length);
      setComputerChoice(CHOICES[randomIndex]);
      setComputerPicking(true);

      const computerTransactionTimer = setTimeout(() => {
        setComputerPicking(false);
        setCalculatingResult(true);
      }, 2000);

      return () => clearTimeout(computerTransactionTimer);
    }
  }, [playerChoice]);

  useEffect(() => {
    if (calculatingResult) {
      const resultTransactionTimeout = setTimeout(() => {
        calculateResult();
        setCalculatingResult(false);
      }, 2000);

      return () => clearTimeout(resultTransactionTimeout);
    }
  }, [calculateResult, calculatingResult]);

  return (
    <div className="grid">
      {playerChoice === null ? (
        <Controls setChoice={setPlayerChoice} />
      ) : (
        <GamePlay
          computerPicking={computerPicking}
          calculatingResult={calculatingResult}
          playerChoice={playerChoice}
          computerChoice={computerChoice}
          result={result}
          onPlayAgain={playAgain}
        />
      )}
    </div>
  );
}
