import { useEffect, useState } from 'react'
import React from 'react'
import axios from 'axios'

function useDebounce(input, time){
    const [debouncedValue, setDebouncedValue] = useState(input)
    useEffect(()=>{
        const timerId = setTimeout(()=>{
            setDebouncedValue(input)
        }, time)

        return () => {
            clearTimeout(timerId)
        }
    })
    return debouncedValue
}

function App() {
    const [input, setInput] = useState('')
    const debouncedValue = useDebounce(input, 500)

    return (
        <>
            <input onChange={(e)=>setInput(e.target.value)}></input><br /><br />  
            {debouncedValue}          
        </> 
    )
}

export default App
