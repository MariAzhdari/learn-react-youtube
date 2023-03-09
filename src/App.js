import { useState } from 'react';
import './App.css';

function App() {
  const[inputValue,setInputValue] = useState("");

  const ClickInput = (event) => {
   setInputValue(event.target.value);
  };
  return(
    <div> 
      <input type="text" onChange={ClickInput} />
      {inputValue}
    </div>
  );

}
export default App;
