import './Q6.css';
import { useState } from 'react';

export default function Q6() {


    function ColorBox(props) {
        return (
            <div className='box' style={{ backgroundColor: props.bgColor }}>
                <button onClick={()=>{
                    // let temp = [...boxArr];
                    // temp.splice(props.index, 1); //index 위치 값 삭제
                    // setBoxArr(temp);

                    // let temp = [...boxArr];
                    // temp = temp.filter(( _ , idx)=>{
                    //     return idx != props.index;
                    // });
                    // setBoxArr(temp);

                setBoxArr(boxArr.filter(( _ , idx)=>{return idx != props.index;}));

                }}>X</button>
                <button onClick={props.dedel}>dedel</button>
            </div>
            );
        }

    let [boxArr, setBoxArr] = useState(['red', 'blue', 'green', 'black', 'red', 'blue', 'green']);

    return (

        <div>
            <div>
                <button onClick={() => { setBoxArr(['red', ...boxArr]) }}>앞빨간박스추가</button>
                <button onClick={() => { setBoxArr(['blue', ...boxArr]) }}>앞파란박스추가</button>
                <button onClick={() => { setBoxArr(['green', ...boxArr]) }}>앞초록박스추가</button>

                <button onClick={() => { setBoxArr([...boxArr, 'red']) }}>뒤빨간박스추가</button>
                <button onClick={() => { setBoxArr([...boxArr, 'blue']) }}>뒤파란박스추가</button>
                <button onClick={() => { setBoxArr([...boxArr, 'green']) }}>뒤초록박스추가</button>

                <button onClick={() => {
                    let temp = [...boxArr];
                    temp.shift();
                    setBoxArr(temp);
                }}>앞박스삭제</button>
                <button onClick={() => {
                    let temp = [...boxArr];
                    temp.pop();
                    setBoxArr(temp);
                }}>뒤박스삭제</button>
            </div>

            <div>
                {
                    boxArr.map((item, index) => {
                        return <ColorBox bgColor={item} index={index} 
                        dedel={()=>{
                            setBoxArr(boxArr.filter(( _ , idx)=>{return idx != index;}));
                        }}
                        />
                    })
                }
            </div>



        </div>
    )
}
