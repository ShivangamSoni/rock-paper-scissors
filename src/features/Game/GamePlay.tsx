import ControlButton from '@components/ControlButton';

export default function GamePlay({
  computerPicking,
  calculatingResult,
  result,
}: {
  computerPicking: boolean;
  calculatingResult: boolean;
  result: string;
}) {
  return (
    <div
      className={`grid grid-cols-[auto_auto_auto] content-center justify-center space-x-24`}
    >
      <div className="flex flex-col items-center justify-between gap-12">
        <span className="uppercase">You Picked</span>
        <ControlButton variant="rock" disabled>
          <span className="sr-only">Rock</span>
          <img src="/assets/icon/icon-rock.svg" alt="" />
        </ControlButton>
      </div>

      <div className="flex flex-col items-center justify-between gap-12">
        <span className="uppercase">
          {computerPicking ? '' : 'The Computer Picked'}
        </span>
        {computerPicking ? (
          <div className="w-36 h-36 bg-black bg-opacity-20 rounded-full animate-bounce flex items-center justify-center text-center">
            The Computer is Picking
          </div>
        ) : (
          <ControlButton variant="rock" disabled>
            <span className="sr-only">Rock</span>
            <img src="/assets/icon/icon-rock.svg" alt="" />
          </ControlButton>
        )}
      </div>

      <div className="col-start-2 row-start-1 grid">
        {calculatingResult ? (
          <div className="flex items-center justify-center animate-ping">
            Calculating Result
          </div>
        ) : (
          result && (
            <div className="flex flex-col justify-center gap-4">
              <span className="uppercase font-bold text-7xl">{result}</span>
              <button className="outline-none border-none bg-white text-neutral-button text-lg py-2 rounded-md transition-colors hover:text-white hover:bg-neutral-button focus-visible:text-white focus-visible:bg-neutral-button">
                Play Again
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
}
