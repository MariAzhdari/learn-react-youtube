import React,{useState} from 'react';

import './App.css';

function App() {
  const[count,setCount] =useState(0)
  function contNumDe(){
    setCount(c => c-1)
  }
  function contNumIn(){
    setCount((i) => i + 1); 
  }

  return (
    <div className='btn'>
      <button onClick={contNumDe}>-</button>
      <span>{count}</span>
      <button onClick={contNumIn}>+</button>
    </div>
  );
}

export default App;
