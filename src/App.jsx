import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <button onClick={()=>{alert("You clicked me")}}>Click Me!</button>
    </div>
  )
}

export default App
