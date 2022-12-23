import React, { Component } from 'react';
import '../ImageFinder.css';

class Button extends Component {
  render() {
    return (
      <div className="Button-center">
        <button type="button" className="Button">
          Load more
        </button>
      </div>
    );
  }
}

export default Button;
