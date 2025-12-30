import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [days, setDays] = useState(0) //Usado para atualizar a quantidade de dias em tempo real

  function passDay(){
    setDays(days + 1) 
    console.log(days)
  }

  return (
    <>
      <div>
        <p>Dias: {days}</p>
        <button onClick={passDay}>Pass Day</button>
      </div>
    </>
  )
}

export default App
