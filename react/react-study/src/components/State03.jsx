import { useState } from "react";

export default function State03(){
    //let arr = [1,2,3,4,5]; // 일반 배열 변수  ,6 ,7

    // 변수, set함수   useState(초기값);
    let [arr, setArr] = useState([1,2,3,4,5]);

    // 참조변수 (주소)
    // 객체, 배열

    // { key:value }
    // [ x,x,x ]
    // { key:[] }
    // [ {},{},{} ]

    return(
        <div>
            <button onClick={()=>{

                // 배열에 값 추가 push unpush splice

                //[1,2,3,4,5]
                // arr.push(6) [1,2,3,4,5,6]
                /*
                console.log(arr);
                arr.push(6);
                console.log(arr);

                setArr(arr); // 뒤에 6이 추가된 arr 배열 함수
                */
                // 참조변수의 주소자체가 바뀌지 않기 때문에, 재렌더링 발생되지 않음
                // state 변수의 set 함수를 통해 기존의 값이 새로운 값으로 변경됨 -> 재렌더링 조건

                // 깊은복사 -> 새로운 주소에 데이터 생성
                // set함수(새로운주소);
                //let temp = arrk // 얕은복사
                let temp = [...arr]; // 깊은복사 [...[1,2,3,4,5]]    [1,2,3,4,5]
                temp.push(6);   // [1,2,3,4,5,6]
                setArr(temp);   // arr = temp;
                //state변수 arr에 값(주소)이 새로운 주소로 변경 -> 재렌더링

            }}>배열변경버튼</button>
            {
                arr.map((val)=>{
                    return <p>{val}</p>  // 하나 쓸때는 ()없어도 작동
                })
                //arr.map((val)=>(<p>{val}</p>))
            }
        </div>
    )
}
