import React, { useState, useEffect } from 'react';
import { CreateCards } from '../Components/Cards';
import { ShowCards } from '../Components/ShowCards'

function App() {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/cards')
      .then(response => response.json())
      .then(data => setCards(data));
  }, []);

  return (
    <>
      <CreateCards></CreateCards>
      <ShowCards cards={cards}></ShowCards>
    </>
  )

}

export default App
