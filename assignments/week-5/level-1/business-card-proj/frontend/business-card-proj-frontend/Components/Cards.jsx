import { useState } from 'react';

export function CreateCards() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [interests, setInterests] = useState([]);
    const [socials, setSocials] = useState({
        "Twitter": "",
        "Github": "",
        "Linkedin": "",
        "Replit": ""
    });

    function addCard(){
        // console.log(name);
        // console.log(description);
        // console.log(interests);
        // console.log(socials);

        fetch("http://localhost:3000/cards", {
            method:"POST",
            body:JSON.stringify({
                name: name,
                description: description,
                interests: interests,
                socials: socials
            }),
            headers:{
                "Content-Type": "application/json"
            }
        })
            .then(function(res){
                const json = res.json();
                alert("Card added");
            })
    }

    function handleInterestsChange(e) {
        const interestsArray = e.target.value.split(',');
        setInterests(interestsArray.map(interest => interest.trim()));
    }

    function handleSocialsChange(e){
        const socialsObject = e.target.value.split(',').map(value => value.trim());
        const social1 = {
            "Twitter": socialsObject[0] || "",
            "Github": socialsObject[1] || "",
            "Linkedin": socialsObject[2] || "",
            "Replit": socialsObject[3] || "",
        }
        setSocials(social1);

    }

    return (
        <>
            <input 
                placeholder="Enter Name" 
                style={{
                    padding:7
                }} 
                onChange={(e)=>{
                    setName(e.target.value);
                }} 
            /> <br /><br />

            <input 
                placeholder="Enter Description" 
                style={{
                    padding:7
                }} 
                onChange={(e)=>{
                    setDescription(e.target.value);
                }} 
            /> <br /><br />

            <input 
                placeholder="Enter Interests" 
                style={{
                    padding:7
                }} 
                onChange={handleInterestsChange} 
            /> <br /><br />

            <input 
                placeholder="Enter Socials" 
                style={{
                    padding:7
                }} 
                onChange={handleSocialsChange} 
            /> <br /><br />

            <button 
                onClick={addCard} 
                style={{
                    padding:7
                }}
            >Add Card</button>
        </>
    )
}