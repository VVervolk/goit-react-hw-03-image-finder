import { createPortal } from 'react-dom';
import { Modal, Overlay } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default function ModalImage(props) {
  return createPortal(
    <Overlay>
      <Modal>{props.children}</Modal>
    </Overlay>,
    modalRoot
  );
}
