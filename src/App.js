import Form from "./components/form";
import BoxCards from './components/boxCards';
import React, { useState } from "react";

function App() {
  const [cardsValue,setCardsValue] = useState([]);
  
  let createNote = (title,note) => {
    setCardsValue([...cardsValue,
      { title: title,note: note }
    ]);

 ;
  }

  return (
    <div className="App">
      <main> 
        <Form getValue={createNote} />
        <BoxCards cardsValue={cardsValue}/>
      </main>
    </div>
  );
}

export default App;
