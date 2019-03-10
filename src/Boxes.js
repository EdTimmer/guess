import React, {useState} from 'react';
import './App.css';

function Boxes({press, correctNumber}) {

  // const [correctBox0, setCorrectBox0] = useState();
  // const [correctBox1, setCorrectBox1] = useState();
  // const [correctBox2, setCorrectBox2] = useState();
  // const [correctBox3, setCorrectBox3] = useState();

  console.log('correctNumber is: ', correctNumber);
  // const timer = m => new Promise(r => setTimeout(r, m));

  let correctBox0, correctBox1, correctBox2, correctBox3;
  switch(correctNumber) {
    case 0:
      correctBox0 = "blink";
      break;
    case 1:
      correctBox1 = "blink";
      break;
    case 2:
      correctBox2 = "blink";
      break;
    case 3:
      correctBox3 = "blink";
      break;
    default:
      break;
  }

  return (      
       
    <div className="grid-container body">

      <div className={`grid-item one ${correctBox0}`} onClick={() => press(0)} />
      <div className={`grid-item two ${correctBox1}`} onClick={() => press(1)} />
      <div className={`grid-item three ${correctBox2}`} onClick={() => press(2)} />      
      <div className={`grid-item four ${correctBox3}`} onClick={() => press(3)} />          
    
    </div>
    
  );

}

export default Boxes;
