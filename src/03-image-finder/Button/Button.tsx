import React, { Component } from 'react';
import '../ImageFinder.css';
import { IProps } from '../types';

class Button extends Component<IProps> {
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
