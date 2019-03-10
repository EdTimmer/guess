import React from 'react';
import './App.css';
// import Boxes from './Boxes';

function Boxes({press}) {
  
  return (      
       
    <div className="grid-container body">

      <div className="grid-item one" onClick={() => press(0)} />
      <div className="grid-item two" onClick={() => press(1)} />
      <div className="grid-item three" onClick={() => press(2)} />      
      <div className="grid-item four" onClick={() => press(3)} />          
    
    </div>
    
  );

}

export default Boxes;
