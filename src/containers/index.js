import React, { Component } from 'react';
import PopupComponent from '../component/index.js';

class PopupContainer extends Component {

  subscribe = () => {
  }
  render() {
    return (
          <PopupComponent onSubscribe={this.subscribe} />
    )
  }
};

export default PopupContainer;
