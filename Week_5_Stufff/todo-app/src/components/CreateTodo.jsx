import { useState } from "react";

export function CreateTodo() {

    const [title, setTite] = useState("");
    const [description, setDescription] = useState("");

    return (
      <div>
        <h2 style={{
            margin: 10
            }}>Create Todo</h2>
        <input style={{
            padding: 7,
        }} type="text" placeholder="title" id="title" onChange={(e)=>{
            setTite(e.target.value);
        }}/> <br /><br />
        <input style={{
            padding: 7,  
        }}  type="text" placeholder="description" id="des" onChange={(e)=>{
            setTite(e.target.value);
        }}/> <br /><br />
        <button style={{
            padding: 9,
            borderRadius: 12.5,
        }} onClick={()=>{
            fetch("http://localhost:3000/todo", {
                method:"POST",
                body:JSON.stringify({
                    title: title,
                    description: description
                }),
                headers:{
                    "Content-Type": "application/json"
                }
            })
                .then(function(res){
                    const json = res.json();
                    alert("Todo added");
                })
        }}>Add to do</button>
      </div>
    );
  }
  