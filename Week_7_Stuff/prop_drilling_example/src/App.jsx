import { useContext, useState } from 'react'
import { CountContext} from './context'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <CountContext.Provider value={count}>
            <Count count={count} setCount={setCount}/>
        </CountContext.Provider>
    </>
  )
}

function Count({count, setCount}){
    return (
        <>
            <CountRenderer />
            <br />
            <Buttons count={count} setCount={setCount}/>
        </>
    )
}

function CountRenderer(){
    const count = useContext(CountContext)
    return (
        <>
            {count}
        </>
    )
}

function Buttons({count, setCount}){
    return (
        <>
            <button onClick={()=>setCount(count+1)}>Increase Count</button>
            <button onClick={()=>setCount(count-1)}>Decrease Count</button>
        </>
    )
}


export default App
