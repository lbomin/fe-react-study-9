import { useState } from 'react';
import './Quiz01.css'

let num = 0;

const Quiz01 = () => {
    num += 2;
    return num;
};

  function App() {
    const [number, setNumber] = useState(0);

    return (
        <div>
            <button onClick={() => setNumber(Quiz01())}>
            다음 숫자
            </button>
            <span className='red'>{number}</span>
        </div>
    );
}

export default Quiz01;