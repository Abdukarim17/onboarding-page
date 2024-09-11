import { useState } from 'react'
import './App.css'
import { Final } from './components/Final'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Final />

    </div>
  )
}

export default App
