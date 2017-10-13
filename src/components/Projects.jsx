import React, { Component } from 'react';
import Count from '../Count/Count';
import Youtube from '../Youtube/Youtube';
import '../css/style.css';

class AppReact extends Component {
  render() {
    return(
      <div>
      	<div className="container countdown-app">
        	<Count />
        </div>
        <hr />
        <div className="container">
        	<Youtube />
        </div>
      </div>
      );
  }
}
export default AppReact;
