import { useState } from 'react'
import './App.css'

function App() {
    let [counter, setCounter] = useState(7);

    //let counter = 15;

    const addCounter = () => {
      counter = counter + 1;
      setCounter(counter);
    }

    const removeCounter = () => {
      if(counter > 0){
        setCounter(counter - 1);
      }
      
    }

    return (
      <>
        <h1>GOOD MRONING...</h1>
        <h2>Counter : {counter}</h2>

        <button 
          onClick = {addCounter}
        >Add</button>
        <br />
        <button
          onClick={removeCounter}
        >Remove</button>
      </>
  )
}

export default App
