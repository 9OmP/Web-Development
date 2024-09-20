import { useState } from 'react';

export function ShowCards({cards}) {

    return (
        <>
  <div className="container" style={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }}>
    {cards.map(function(card) {
      return (
        <div className="card" style={{
          backgroundColor: 'white',
          padding: '20px',
          margin: '20px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          borderRadius: '10px',
          width: '450px',
          height: '300px'
        }}>
          <h2>{card.name}</h2>
          <p>{card.description}</p>
          <h3>Interests:</h3>
          <p>{card.interests.join(', ')}</p>
          <h3>Socials:</h3>
          {Object.keys(card.socials).map(function(key) {
            return (
              <button key={key} style={{
                backgroundColor: '#007bff',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                margin: '5px'
              }}
              onClick={() => window.open(card.socials[key], '_blank')}>
                {key}
              </button>
            );
          })}
        </div>
      );
    })}
  </div>
</>
    )



}