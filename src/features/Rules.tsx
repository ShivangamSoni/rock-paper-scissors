import Modal from '@components/Modal';

export default function Rules({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Modal open={open} title={'Rules'} onClose={onClose}>
      <div className="flex items-center justify-center">
        <img
          className="w-full"
          src="/assets/rules.svg"
          alt="Game Rules: Rock wins against scissors; paper wins against rock; and scissors wins against paper"
        />
      </div>
    </Modal>
  );
}
