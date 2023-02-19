import React, { Component } from 'react';
import '../ImageFinderHooks.css';
import { IProps } from '../types';

class Button extends Component<IProps> {
  componentDidMount() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }
  render() {
    return (
      <div className="Button-center">
        <button type="button" className="Button" onClick={this.props.onClick}>
          Load more
        </button>
      </div>
    );
  }
}

export default Button;
