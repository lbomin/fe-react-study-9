  import { useState } from 'react'
  import heroImg from './assets/hero.png'
  import reactLogo from './assets/react.svg'
  import viteLogo from './assets/vite.svg'
  import './App.css'
  import Quiz01 from './quiz/Quiz01/Quiz01.jsx'
  import Quiz02 from './quiz/Quiz02/Quiz02.jsx'

  function App() {
    const [number, setNumber] = useState(0);

    return (
        <div>
          <Quiz02 />
        </div>
    );
}

  export default App
