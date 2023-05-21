import { Result } from '@customTypes/Game';

const RESULTS: { [key in Result]: string } = {
  win: 'You Win',
  lose: 'You Lose',
  tie: 'Tie',
};

export const getResultString = (result: Result) => RESULTS[result];
