import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { IPropsModal } from '../types';
import '../ImageFinder.css';

const modalRoot = document.querySelector('modal-root');

class Modal extends Component<IPropsModal> {
  componentDidMount() {
    window.addEventListener('keydown', this.hendleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.hendleKeyDown);
  }

  hendleKeyDown = (e: { code: string }) => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = (event: React.MouseEvent) => {
    const { target, currentTarget } = event;
    if (target === currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    // const { largeImage, tags } = this.props;
    return createPortal(
      <div className="Overlay" onClick={this.handleBackdropClick}>
        <div className="Modal">{/* <img src={largeImage} alt={tags} /> */}</div>
      </div>,
      modalRoot as Element,
    );
  }
}

export default Modal;

/* <div className="Modal">
    <img src={src} alt={alt} /> 
</div> */
