import React, { useState } from "react"
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
    useSetRecoilState,
  } from 'recoil';
import { todosAtom } from "./store/atoms/todosAtom";
import { filterInput } from "./store/atoms/filterInput";
import { filteredTodos } from "./store/selectors/filter";

function App() {

    return (
        <>
            <RecoilRoot>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Todos />} />
                    </Routes>
                </BrowserRouter>
            </RecoilRoot>    
        </>
    )
}

function Todos(){
    const filtered = useRecoilValue(filteredTodos)
    return (
        <>
            <Input /><br /><br />
            <FilterSection />
            <h1>Filtered Todo List</h1>
            {filtered.map(todo => (
                <div key={todo.id}>  
                    <h3>{todo.title}</h3>
                    <p>{todo.description}</p>
                </div>
            ))}
        </>
    );
}


function Input(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [, setTodos] = useRecoilState(todosAtom)
    return (
        <>
            <input onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Enter Todo Title" /> <br /><br />
            <input onChange={(e)=>setDescription(e.target.value)} type="text" placeholder="Enter Todo Description" /> <br /><br />
            <button onClick={()=>{
                setTodos((old)=>{
                    return [...old, {
                        id: old.length + 1,
                        title:title,
                        description:description
                    }]
                })
            }}>Add Todo</button>
        </>
    )
}

function FilterSection(){
    const [, setFilterInput] = useRecoilState(filterInput)
    return (
        <input 
            onChange={(e)=>setFilterInput(e.target.value)} 
            type="text" 
            placeholder="Filter todos by..."
        />
    )
}

export default App
