import React, { useState } from 'react';
import './App.css';
import Boxes from './Boxes';
import pyramids from './images/pyramids.jpg';

function App() {
  const [totalCount, setTotalCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [correctGuess, setCorectGuess] = useState(false);

  const showPicture = m => new Promise(r => setTimeout(r, m));

  function pressOne() {
    
    if (totalCount < 24) {
      let correctNumber = Math.floor(Math.random() * 4);
      setTotalCount(totalCount + 1);
      if (correctNumber === 0) {
        setCorrectCount(correctCount + 1);
        
        (async () => {
          setCorectGuess(true);
          await showPicture(1000)
          .then(() =>  setCorectGuess(false)); 
        })();
        
      }
    }
  }

  function pressTwo() {
    if (totalCount < 24) {
      let correctNumber = Math.floor(Math.random() * 4);
      setTotalCount(totalCount + 1);
      if (correctNumber === 1) {
        setCorrectCount(correctCount + 1);
        (async () => {
          setCorectGuess(true);
          await showPicture(1000)
          .then(() =>  setCorectGuess(false)); 
        })();
      }
    }
  }

  function pressThree() {
    if (totalCount < 24) {
      let correctNumber = Math.floor(Math.random() * 4);
      setTotalCount(totalCount + 1);
      if (correctNumber === 2) {
        setCorrectCount(correctCount + 1);
        (async () => {
          setCorectGuess(true);
          await showPicture(1000)
          .then(() =>  setCorectGuess(false)); 
        })();
      }
    }
  }

  function pressFour() {
    if (totalCount < 24) {
      let correctNumber = Math.floor(Math.random() * 4);
      setTotalCount(totalCount + 1);
      if (correctNumber === 3) {
        setCorrectCount(correctCount + 1);
        (async () => {
          setCorectGuess(true);
          await showPicture(1000)
          .then(() =>  setCorectGuess(false)); 
        })();
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
            correctGuess ? <img src={pyramids} style={{ height: '600px', width: '600px' }} alt="reward" /> : <Boxes pressOne={pressOne} pressTwo={pressTwo} pressThree={pressThree} pressFour={pressFour} />
          }
          <div className="result">{totalCount} trials</div>
          <button className="reset" onClick={clearState}>Reset</button>        
        </div>
        
      
      </div>
    );

}

export default App;
