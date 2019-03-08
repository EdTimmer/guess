import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.pressOne = this.pressOne.bind(this);
    this.pressTwo = this.pressTwo.bind(this);
    this.pressThree = this.pressThree.bind(this);
    this.pressFour = this.pressFour.bind(this);
    
  }
  state = {
    totalCount: 0,
    correctCount: 0,    
  }

  pressOne() {
    if (this.state.totalCount < 24) {
      let correctNumber = Math.floor(Math.random() * 4);
      this.setState({totalCount: this.state.totalCount + 1});
      if (correctNumber === 0) {
        this.setState({correctCount: this.state.correctCount + 1})
      }
    }
  }

  pressTwo() {
    if (this.state.totalCount < 24) {
      let correctNumber = Math.floor(Math.random() * 4);
      this.setState({totalCount: this.state.totalCount + 1});
      if (correctNumber === 1) {
        this.setState({correctCount: this.state.correctCount + 1})
      }
    }
  }

  pressThree() {
    if (this.state.totalCount < 24) {
      let correctNumber = Math.floor(Math.random() * 4);
      this.setState({totalCount: this.state.totalCount + 1});
      if (correctNumber === 2) {
        this.setState({correctCount: this.state.correctCount + 1})
      }
    }
  }

  pressFour() {
    if (this.state.totalCount < 24) {
      let correctNumber = Math.floor(Math.random() * 4);
      this.setState({totalCount: this.state.totalCount + 1});
      if (correctNumber === 3) {
        this.setState({correctCount: this.state.correctCount + 1})
      }
    }
  }

  clearState() {
    this.setState({
      totalCount: 0,
      correctCount: 0
    })
  }
  
  render() {
    const {totalCount, correctCount} = this.state;
    const {pressOne, pressTwo, pressThree, pressFour} = this;
    // let condition = Math.floor(Math.random() * 4); 
    // let color1;
    // let color2;
    // let color3;
    // let color4;

    // switch(condition) {
    //   case 0:
    //     color1 = "green";
    //     color2 = "yellow";
    //     color3 = "yellow";
    //     color4 = "yellow";
    //     break;
    //   case 1:
    //     color1 = "yellow";
    //     color2 = "blue";
    //     color3 = "yellow";
    //     color4 = "yellow";
    //     break;
    //   case 2:
    //     color1 = "yellow";
    //     color2 = "yellow";
    //     color3 = "red";
    //     color4 = "yellow";
    //     break;
    //   case 3:
    //     color1 = "yellow";
    //     color2 = "yellow";
    //     color3 = "yellow";
    //     color4 = "green";
    //     break;
    //   default:
    //     break;
    // }

    // console.log(condition);
 
    return (

      
      <div className="App">

        <div>
          <h3>Total Count: {totalCount}</h3>
          <h3>Correct Count: {correctCount}</h3>
        
        </div>

        <div className="grid-container">

          <div className="grid-item one" onClick={pressOne}>
          1
          </div>

          <div className="grid-item two" onClick={pressTwo}>
          2
          </div>

          <div className="grid-item three" onClick={pressThree}>
          3
          </div>

          <div className="grid-item four" onClick={pressFour}>
          4
          </div>
        
        </div>
      
      </div>
    );
  }
}

export default App;
