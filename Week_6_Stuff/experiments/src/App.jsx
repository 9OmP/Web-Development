import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';

function App() {

  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  let sum = useMemo(()=>{
    let temp = 0 
    for (let i = 1; i <= inputValue; i++){
      temp += i;
    }
    return temp;
  }, [inputValue])
  

  return (
    <>
      <input onChange={(e)=>setInputValue(e.target.value)}></input><br />
      <h5>Sum is {sum}</h5>
      <button onClick={()=>{setCounter(counter+1)}}>Counter ({counter})</button>
    </>
  )
}


export default App;