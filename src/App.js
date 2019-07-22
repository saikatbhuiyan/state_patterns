import React, {Component} from 'react';
import './App.css';
import Lottery from './Lottery';

class App extends Component {
  render () {
    return (
      <div>
        <Lottery />
        <Lottery title = "MIN LOTTO" numBalls = {4} maxNum = {50}  />
      </div>
      
    );
  }
}

export default App;
