import { useState } from 'react';

export default function Quiz02(){

let arr = ['하나','둘','셋'];
let [num, setArr] = useState(0);

    return (
        <div>
            <p>{arr[num]}</p>
            <button onClick={()=>{
                setArr((num+1) % arr.length);
            }}>
            변경버튼
            </button>
        </div>
    );
}