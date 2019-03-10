import React, { useState } from 'react';
import './App.css';
import Boxes from './Boxes';
import pyramids from './images/pyramids.jpg';

function App() {
  const [totalCount, setTotalCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [correctGuess, setCorectGuess] = useState(false);
  const [message, setMessage] = useState("");
  const [correctNumber, setCorrectNumber] = useState();

  function messageFn() {
    if (correctCount > 1 && correctCount <= 3) {
      setMessage("good");
    }
    if (correctCount > 3 && correctCount <= 5) {
      setMessage("better");
    }
    if (correctCount > 5 && correctCount <= 7) {
      setMessage("great");
    }
    if (correctCount > 7 && correctCount <= 9) {
      setMessage("awesome!");
    }
    if (correctCount > 9 && correctCount < 25) {
      setMessage("call us");
    }
    // console.log("correctCount in messageFn: ", correctCount);
  }

  function press(num) {

    if (totalCount < 24) {
      const timer = m => new Promise(r => setTimeout(r, m));
      let correctNumber = Math.floor(Math.random() * 4);
      setCorrectNumber(correctNumber);
      setTotalCount(totalCount + 1);
      if (correctNumber === num) {
        // setCorrectCount(correctCount + 1);        
        (async () => {
          setCorectGuess(true);
          await timer(1000)
            .then(() => setCorectGuess(false))
            // .then(() => console.log("correctCount in async is: ", correctCount));
            // await messageFn();
            .then(() => setCorrectCount(correctCount + 1))
            .then(() => messageFn());
        })();
        // messageFn();
      }
    }
  }

  function clearState() {
    setTotalCount(0);
    setCorrectCount(0);
    setCorectGuess(false);
    setMessage("");
  }

  return (
    <div className="App">

      <div className="header">
        <p>Tap the correct square to see a picture</p>

        <span>{message}</span>
        <br/>

        <span>Correct: {correctCount}</span>

      </div>
      <div className="body">
        {
          correctGuess ? <img src={pyramids} style={{ height: '500px', width: '500px' }} alt="reward" /> : <Boxes press={press} correctNumber={correctNumber} />
        }
        <div className="result">{totalCount} trials</div>
        <button className="reset" onClick={clearState}>Reset</button>
      </div>

    </div>
  );

}

export default App;
