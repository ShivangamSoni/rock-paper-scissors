import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({
  open,
  title,
  children,
  onClose,
}: {
  open: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
}) {
  if (!open) {
    return null;
  }

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-30 flex sm:items-center justify-center text-neutral-dark font-semibold font-primary">
      <div className="grid gap-12 sm:content-center justify-items-center sm:justify-items-stretch bg-white px-6 py-12 sm:p-12 w-full sm:max-w-lg relative rounded-xl">
        <header className="self-center sm:self-auto">
          <h2 className="uppercase tracking-wide text-3xl font-bold">
            {title}
          </h2>
        </header>

        <div className="self-center sm:self-auto">{children}</div>

        <footer className="self-end sm:self-auto sm:absolute sm:top-12 sm:right-12">
          <button
            className="flex items-center justify-center border-none outline outline-neutral-outline outline-0 p-1.5 rounded-full hover:outline-2 focus-visible:outline-2"
            onClick={onClose}
          >
            <span className="sr-only">Close</span>
            <img src="/assets/icon/icon-close.svg" alt="" />
          </button>
        </footer>
      </div>
    </div>,
    document.querySelector('#modal') as HTMLDivElement,
  );
}
