  import { useState } from 'react'
  import heroImg from './assets/hero.png'
  import reactLogo from './assets/react.svg'
  import viteLogo from './assets/vite.svg'
  import './App.css'
  import Quiz01 from './quiz/Quiz01/Quiz01.jsx'

  function App() {
    const [number, setNumber] = useState(0);

    return (
        <div>
          <Quiz01/>
        </div>
    );
}

  export default App
