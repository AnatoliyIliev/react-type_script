import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { IPropsModal } from '../types';
import '../ImageFinderHooks.css';

const modalRoot = document.getElementById('modal-root');

function Modal({ onClose, image }: IPropsModal) {
  useEffect(() => {
    window.addEventListener('keydown', hendleKeyDown);

    return () => window.removeEventListener('keydown', hendleKeyDown);
  });

  const hendleKeyDown = (e: { code: string }) => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = (event: React.MouseEvent) => {
    const { target, currentTarget } = event;
    if (target === currentTarget) {
      onClose();
    }
  };

  const { largeImageURL, tags } = image!;

  return createPortal(
    <div className="Overlay" onClick={handleBackdropClick}>
      <div className="Modal">
        Hello
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>,
    modalRoot as Element,
  );
}

export default Modal;
