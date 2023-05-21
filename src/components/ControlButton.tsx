import { Choice } from '@customTypes/Game';
import { ComponentProps } from 'react';

interface Props extends ComponentProps<'button'> {
  variant: Choice;
  size?: 'sm' | 'md';
  highlight?: boolean;
}

const BG: { [key in Choice]: string } = {
  rock: 'before:bg-rock',
  paper: 'before:bg-paper',
  scissors: 'before:bg-scissors',
  lizard: 'before:bg-lizard',
  spock: 'before:bg-spock',
};

export default function ControlButton({
  variant,
  className,
  size = 'md',
  highlight,
  children,
  ...props
}: Props) {
  return (
    <div
      className={`${className ?? ''} ${
        highlight
          ? 'relative before:rounded-full before:content-[""] before:absolute before:inset-0 before:[box-shadow:0_0_0_15rem_hsla(0,0%,100%,0.025),0_0_0_10rem_hsla(0,0%,100%,0.025),0_0_0_5rem_hsla(0,0%,100%,0.025)]'
          : ''
      }`}
    >
      <button
        {...props}
        className={`outline-none border-none ${
          size === 'md'
            ? 'w-28 h-28 sm:w-36 sm:h-36'
            : 'w-20 h-20 sm:w-28 sm:h-28'
        } flex items-center justify-center p-4 text-xl bg-white text-neutral-dark rounded-full relative isolate after:content-[''] after:absolute after:inset-0 after:bg-white after:rounded-full after:-z-[1] before:content-[''] before:absolute before:-inset-[0.7rem] md:before:-inset-[1rem] ${
          BG[variant]
        } before:rounded-full before:-z-[1] before:[box-shadow:inset_0_-8px_0_0_hsla(0,100%,0%,0.3)] after:[box-shadow:inset_0_8px_0_0_hsla(0,100%,0%,0.1)]  transition-transform ${
          props.disabled ? '' : 'hover:scale-105 focus-visible:scale-105'
        }`}
      >
        {children}
      </button>
    </div>
  );
}
