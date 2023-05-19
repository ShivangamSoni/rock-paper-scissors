import { ComponentProps } from 'react';

interface Props extends ComponentProps<'button'> {
  variant: keyof typeof BG;
}

const BG = {
  rock: 'before:bg-rock',
  paper: 'before:bg-paper',
  scissors: 'before:bg-scissors',
} as const;

export default function ControlButton({
  variant,
  className,
  children,
  ...props
}: Props) {
  return (
    <div className={className}>
      <button
        {...props}
        className={`outline-none border-none w-36 h-36 flex items-center justify-center text-xl bg-white text-neutral-dark rounded-full relative isolate after:content-[''] after:absolute after:inset-0 after:bg-white after:rounded-full after:-z-[1] before:content-[''] before:absolute before:-inset-[1rem] ${BG[variant]} before:rounded-full before:-z-[1] before:[box-shadow:inset_0_-8px_0_0_hsla(0,100%,0%,0.3)] after:[box-shadow:inset_0_8px_0_0_hsla(0,100%,0%,0.1)]  transition-transform hover:scale-105 focus-visible:scale-105`}
      >
        {children}
      </button>
    </div>
  );
}
