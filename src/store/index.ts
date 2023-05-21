import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

import { GameMode } from '@customTypes/Game';

export const scoreAtom = atomWithStorage('score', 0);

export const gameModeAtom = atom<GameMode | null>(null);
