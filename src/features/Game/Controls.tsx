import ControlButton from '@components/ControlButton';

export default function Controls() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative">
        <img src="/assets/bg/bg-triangle.svg" alt="" />
        <ControlButton
          variant="paper"
          className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2"
        >
          <span className="sr-only">Paper</span>
          <img src="assets/icon/icon-paper.svg" alt="" />
        </ControlButton>
        <ControlButton
          variant="scissors"
          className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2"
        >
          <span className="sr-only">Scissor</span>
          <img src="assets/icon/icon-scissors.svg" alt="" />
        </ControlButton>
        <ControlButton
          variant="rock"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
        >
          <span className="sr-only">Rock</span>
          <img src="assets/icon/icon-rock.svg" alt="" />
        </ControlButton>
      </div>
    </div>
  );
}
