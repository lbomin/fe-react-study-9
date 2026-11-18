
import { useState } from "react";
import './Q5.css';

export default function Q5() {

    let [box, setBox] = useState(['red','blue','green']);
    let [box2, setBox2] = useState(['red','blue','green']);

    return (
        <div>
            <div>
                <button onClick={() => {
                    setBox([...box, 'red']);
                }}>앞빨간박스추가</button>

                <button onClick={() => {
                    setBox([...box, 'blue']);
                }}>앞파란박스추가</button>

                <button onClick={() => {
                    setBox([...box, 'green']);
                }}>앞초록박스추가</button>
    
                <button onClick={() => {
                    setBox2([...box2, 'red']);
                }}>뒤빨간박스추가</button>

                <button onClick={() => {
                    setBox2([...box2, 'blue']);
                }}>뒤파란박스추가</button>

                <button onClick={() => {
                    setBox2([...box2, 'green']);
                }}>뒤초록박스추가</button>

                <button onClick={() => {
                setBox(box.slice(1));
                }}>앞박스제거</button>

                <button onClick={() => {
                setBox2(box2.slice(0, -1));
                }}>뒤박스제거</button>
            </div>

            <div>
                {box.map((value, index) => (
                    <span
                        className="box"
                        key={index}
                        style={{ backgroundColor: value }}
                    ></span>
                ))}
                <span className="box" style={{ backgroundColor: 'black' }}></span>
                {box2.map((value, index) => (
                    <span
                        className="box"
                        key={index}
                        style={{ backgroundColor: value }}
                    ></span>
                ))}
            </div>
        </div>
    );
}
