import Modal from '@components/Modal';
import { gameModeAtom } from '@store/index';
import { useAtom } from 'jotai';

export default function Rules({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [gameMode] = useAtom(gameModeAtom);

  return (
    <Modal open={open} title={'Rules'} onClose={onClose}>
      <div className="flex items-center justify-center">
        <img
          className="w-full"
          src={
            gameMode === 'basic'
              ? '/assets/rules.svg'
              : '/assets/rules-bonus.svg'
          }
          alt="Game Rules: Rock wins against scissors; paper wins against rock; and scissors wins against paper"
        />
      </div>
    </Modal>
  );
}
