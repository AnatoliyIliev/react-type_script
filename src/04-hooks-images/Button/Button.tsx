import React, { useEffect } from 'react';
import '../ImageFinderHooks.css';
import { IProps } from '../types';

function Button({ onClick }: IProps) {
  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  });

  return (
    <div className="Button-center">
      <button type="button" className="Button" onClick={onClick}>
        Load more
      </button>
    </div>
  );
}

export default Button;
