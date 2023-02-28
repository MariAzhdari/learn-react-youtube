import React from 'react';


import './App.css';



function App() {
  // const[count,setCount] =useState(0)
  // function contNumDe(){
  //   setCount(c => c-1)
  // }
  // function contNumIn(){
  //   setCount((i) => i + 1); 
  // }

  // return (
  //   <div className='btn'>
  //     <button onClick={contNumDe}>-</button>
  //     <span>{count}</span>
  //     <button onClick={contNumIn}>+</button>
  //   </div>
  // );

  const Students = [
    { name: "mari", isGirl: true },
    { name: "mo", isGirl: false },
    { name: "eli", isGirl: true },
    { name: "Ali", isGirl: false },
    { name: "maf", isGirl: false },
    { name: "hani", isGirl: true },
    { name: "sara", isGirl: true },
    { name: "hadi", isGirl: false },
  ];

  return(
<div>
{Students.map(
(S ,k ) => S.isGirl &&  <h1>{S.name}</h1>
)}
</div>
  );
}
export default App;
