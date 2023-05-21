import { Choice, GameMode, Result } from '@customTypes/Game';

function getBasicResult(playerChoice: Choice, computerChoice: Choice): Result {
  if (playerChoice === computerChoice) {
    return 'tie';
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'win';
  } else {
    return 'lose';
  }
}

function getSpecialResult(
  playerChoice: Choice,
  computerChoice: Choice,
): Result {
  if (playerChoice === computerChoice) {
    return 'tie';
  } else if (
    (playerChoice === 'rock' &&
      (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
    (playerChoice === 'paper' &&
      (computerChoice === 'rock' || computerChoice === 'spock')) ||
    (playerChoice === 'scissors' &&
      (computerChoice === 'paper' || computerChoice === 'lizard')) ||
    (playerChoice === 'lizard' &&
      (computerChoice === 'paper' || computerChoice === 'spock')) ||
    (playerChoice === 'spock' &&
      (computerChoice === 'rock' || computerChoice === 'scissors'))
  ) {
    return 'win';
  } else {
    return 'lose';
  }
}

export function getResult(
  gameMode: GameMode,
  playerChoice: Choice,
  computerChoice: Choice,
): Result {
  return gameMode === 'basic'
    ? getBasicResult(playerChoice, computerChoice)
    : getSpecialResult(playerChoice, computerChoice);
}
