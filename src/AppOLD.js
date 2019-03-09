import React, { Component } from 'react';
import './App.css';

class AppOLD extends Component {

  state = {
    totalCount: 0,
    correctCount: 0,    
  }

  pressOne = () => {
    if (this.state.totalCount < 24) {
      let correctNumber = Math.floor(Math.random() * 4);
      this.setState({totalCount: this.state.totalCount + 1});
      if (correctNumber === 0) {
        this.setState({correctCount: this.state.correctCount + 1})
      }
    }
  }

  pressTwo = () => {
    if (this.state.totalCount < 24) {
      let correctNumber = Math.floor(Math.random() * 4);
      this.setState({totalCount: this.state.totalCount + 1});
      if (correctNumber === 1) {
        this.setState({correctCount: this.state.correctCount + 1})
      }
    }
  }

  pressThree = () => {
    if (this.state.totalCount < 24) {
      let correctNumber = Math.floor(Math.random() * 4);
      this.setState({totalCount: this.state.totalCount + 1});
      if (correctNumber === 2) {
        this.setState({correctCount: this.state.correctCount + 1})
      }
    }
  }

  pressFour = () => {
    if (this.state.totalCount < 24) {
      let correctNumber = Math.floor(Math.random() * 4);
      this.setState({totalCount: this.state.totalCount + 1});
      if (correctNumber === 3) {
        this.setState({correctCount: this.state.correctCount + 1})
      }
    }
  }

  clearState = () => {
    this.setState({
      totalCount: 0,
      correctCount: 0
    })
  }
  
  render() {
    const {totalCount, correctCount} = this.state;
    const {pressOne, pressTwo, pressThree, pressFour, clearState} = this;
 
    return (      
      <div className="App">

        <div>
          <h3>Total Count: {totalCount}</h3>
          <h3>Correct Count: {correctCount}</h3>
        
        </div>

        <div className="grid-container">

          <button className="grid-item one" onClick={pressOne} />         

          <button className="grid-item two" onClick={pressTwo} />

          <button className="grid-item three" onClick={pressThree} />
          
          <button className="grid-item four" onClick={pressFour} />          
        
        </div>

        <button onClick={clearState}>Reset</button>
      
      </div>
    );
  }
}

export default AppOLD;
