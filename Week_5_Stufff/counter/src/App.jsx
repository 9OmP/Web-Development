
import { useState } from 'react';

function App() {
  const [count, setCount] = useState([0]);

  return (
    <>
      <CustomButton count={count} setCount={setCount}></CustomButton>
      <CustomButton count={count+1} setCount={setCount}></CustomButton>
      <CustomButton count={count-1} setCount={setCount}></CustomButton>
      <CustomButton count={count*10} setCount={setCount}></CustomButton>
    </>
  )
}

// component
function CustomButton(props){

  function onclickHandler(){
    props.setCount(props.count + 1);
  }

  return <button onClick={onclickHandler}>
    Counter {props.count}
  </button>
}


export default App
