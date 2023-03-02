import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import About from './components/About'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Hero />
    <Portfolio />  
    <About />
    <Contact />
    
    </div>
  )
}

export default App
