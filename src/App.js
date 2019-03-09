import React, { useState } from 'react';
import './App.css';
import Boxes from './Boxes';

function App() {
  const [totalCount, setTotalCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [correctGuess, setCorectGuess] = useState(false);

  function pressOne() {
    if (totalCount < 24) {
      let correctNumber = Math.floor(Math.random() * 4);
      setTotalCount(totalCount + 1);
      if (correctNumber === 0) {
        setCorrectCount(correctCount + 1)
      }
    }
  }

  function pressTwo() {
    if (totalCount < 24) {
      let correctNumber = Math.floor(Math.random() * 4);
      setTotalCount(totalCount + 1);
      if (correctNumber === 1) {
        setCorrectCount(correctCount + 1)
      }
    }
  }

  function pressThree() {
    if (totalCount < 24) {
      let correctNumber = Math.floor(Math.random() * 4);
      setTotalCount(totalCount + 1);
      if (correctNumber === 2) {
        setCorrectCount(correctCount + 1)
      }
    }
  }

  function pressFour() {
    if (totalCount < 24) {
      let correctNumber = Math.floor(Math.random() * 4);
      setTotalCount(totalCount + 1);
      if (correctNumber === 3) {
        setCorrectCount(correctCount + 1)
      }
    }
  }
  
  function clearState() {
    setTotalCount(0);
    setCorrectCount(0);
  }
  
  return (      
      <div className="App">

        <div className="header">
          <p>Tap the correct square to see a picture</p>
          
          <span>Correct Count: {correctCount}</span>
        
        </div>
        <div className="body">
          {
            correctGuess ? <Boxes pressOne={pressOne} pressTwo={pressTwo} pressThree={pressThree} pressFour={pressFour} /> : <Boxes pressOne={pressOne} pressTwo={pressTwo} pressThree={pressThree} pressFour={pressFour} />
          }
          
          {/*<div className="grid-container body">

            <div className="grid-item one" onClick={pressOne} />         

            <div className="grid-item two" onClick={pressTwo} />

            <div className="grid-item three" onClick={pressThree} />
            
            <div className="grid-item four" onClick={pressFour} />          
          
        </div>*/}
          <div className="result">{totalCount} trials</div>
          <button className="reset" onClick={clearState}>Reset</button>        
        </div>
        
      
      </div>
    );

}

export default App;
