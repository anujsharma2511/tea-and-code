import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)
  const [counter, setCounter] = useState(0);

  let counter = addCounter

  return (
    <>
      <h1>Tea and React</h1>
      <h2>Counter value is: {counter}</h2>
      <button onClick={addCounter()}>Increase counter</button>
      <br></br>
      <br></br>
      <button>Decrease counter</button>
    </>
  )
}

export default App
