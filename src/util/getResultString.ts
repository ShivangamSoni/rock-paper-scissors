import { Result } from '@customTypes/Game';

const RESULTS: { [key in Result]: string } = {
  win: 'You Win',
  lose: 'Computer Win',
  tie: 'Tie',
};

export const getResultString = (result: Result) => RESULTS[result];
