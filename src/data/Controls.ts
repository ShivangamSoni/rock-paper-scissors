import { Choice } from '@customTypes/Game';

export const CONTROLS: {
  variant: Choice;
  value: string;
  image: string;
}[] = [
  {
    variant: 'rock',
    value: 'rock',
    image: '/assets/icon/icon-rock.svg',
  },
  {
    variant: 'paper',
    value: 'paper',
    image: '/assets/icon/icon-paper.svg',
  },
  {
    variant: 'scissors',
    value: 'scissors',
    image: '/assets/icon/icon-scissors.svg',
  },
  {
    variant: 'lizard',
    value: 'lizard',
    image: '/assets/icon/icon-lizard.svg',
  },
  {
    variant: 'spock',
    value: 'spock',
    image: '/assets/icon/icon-spock.svg',
  },
];
