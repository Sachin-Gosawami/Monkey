import React, { Component } from 'react';
import NewsSpinner from './NewsSpinner.gif';
export class Spinner extends Component {
  render() {
    return( 
    <div className='text-center'>
      <img src={NewsSpinner} alt="NewsSpinner" />
    </div>);
  }
}

export default Spinner;
