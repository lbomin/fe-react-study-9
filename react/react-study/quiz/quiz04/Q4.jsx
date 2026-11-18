import './Q4.css';
import { useState } from 'react';

export default function Q4(){

    let [box, setBox] = useState([0]);

    return(
        <div>
            <div>
                <div style={{margin:'10px'}}>
                    <button onClick={()=>{
                        setBox([...box, 0]);
                    }}>추가</button>
                </div>
            </div>
            {box.map((value, index) => (
                    <span className="box" key={index}>
                        박스
                    </span>
                ))}
        </div>
    )
}