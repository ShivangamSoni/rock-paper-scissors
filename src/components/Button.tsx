import { ComponentProps } from 'react';

export default function Button({
  children,
  className,
  ...props
}: ComponentProps<'button'>) {
  return (
    <button
      className={`outline-none border-none bg-white text-neutral-button text-lg py-2 px-4 rounded-md transition-colors hover:text-white hover:bg-neutral-button focus-visible:text-white focus-visible:bg-neutral-button ${
        className ?? ''
      }`}
      {...props}
    >
      {children}
    </button>
  );
}
