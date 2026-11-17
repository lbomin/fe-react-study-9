import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
// import Basic01 from './components/Basic01'
// import State01 from './components/State01'
import Export01 from './components/Export01'
import State02 from './components/State02'
import State03 from './components/State03'
import Props01 from './components/Props01'
import Props02 from './components/Props02'
import Q3 from '../quiz/quiz03/Q3'
import Q3A from '../quiz/quiz03/Q3A'
import NewsBlog from './newsblog/NewsBlog'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <Basic01/>
    // <State01/>
    // <Export01/>
    // <State02/>
    // <State03/>
    // <Props01/>
    // <Props02/>
    // <Q3/>
    // <Q3A/>
    <NewsBlog/>
  )
}

export default App
