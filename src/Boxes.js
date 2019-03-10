import React from 'react';
import './App.css';
// import Boxes from './Boxes';

function Boxes({pressOne, pressTwo, pressThree, pressFour}) {
  
  return (      
       
    <div className="grid-container body">

      <div className="grid-item one" onClick={pressOne} />
      <div className="grid-item two" onClick={pressTwo} />
      <div className="grid-item three" onClick={pressThree} />      
      <div className="grid-item four" onClick={pressFour} />          
    
    </div>
    
  );

}

export default Boxes;
