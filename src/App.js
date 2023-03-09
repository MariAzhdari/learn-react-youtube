import { useState } from 'react';
import './App.css';

function App() {
  const[show,setShow] = useState(true);
  
  const showHandler=()=>{
    setShow(!show)
  }
return (
  <div style={{ textAlign: "center" }}>
    <button onClick={showHandler}>show/hide</button>
    { show ===true && <h1>Hi my name is Mari</h1>}
  </div>
);
}
export default App;
