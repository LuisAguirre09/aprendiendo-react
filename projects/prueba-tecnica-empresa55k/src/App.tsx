
import { useEffect } from 'react'
import './App.css'

function App() {

  useEffect(() => {
    fetch('https://randomuser.me/api?results=100')
      .then(res => res.json())
      .then(res => )
  })
  return (
    <div>
      <h1>Prueba tecnica</h1>
    </div>
  )
}

export default App
