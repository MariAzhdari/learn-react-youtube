import { useState } from 'react';
import './App.css';

function App() {
  const[change,setChange] = useState("blue");
  
  const showHandler=()=>{
   setChange(change === "blue" ? "red" : "blue")
  }
return (
  <div style={{ textAlign: "center" }}>
    <button onClick={showHandler}>show/hide</button>
     <h1 style={{color:change}}> Hi my name is Mari</h1>
  </div>
);
}
export default App;
