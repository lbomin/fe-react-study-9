  import { useState } from 'react'
  import heroImg from './assets/hero.png'
  import reactLogo from './assets/react.svg'
  import viteLogo from './assets/vite.svg'
  import './App.css'
  import nn from "./quiz/Quiz01/Quiz01.js";
  import './quiz/Quiz01/Quiz01.css'

  function App() {
    const [number, setNumber] = useState(0);

    return (
        <div>
            <button onClick={() => setNumber(nn())}>다음 숫자</button>
            <span className='red'>{number}</span>
        </div>
    );
}

  export default App
