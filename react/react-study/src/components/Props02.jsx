import Box from "./Box";
import { useState } from "react";

export default function Props02(){
    let [titleArr, settitlearr] = useState(['아침','점심','저녁']);
    let [detailArr, setDetailArr] = useState(['졸리다','배부르다','피곤하다']);
    
        return(
            <div>
                <button onClick={()=>{

                    /*
                        React
                        데이터 기반으로 화면을 표시/조작

                        버튼을 눌렀을때, 화면에 야식 정보가 추가 표시

                        야식정보 -> 배열에 추가 -> 배열의 데이터가 map으로 반복하며 화면에 표시
                                (값 보존 + 재렌더링)
                    */

                    // 배열은 참조변수 -> 새로운 값으로 변경인식 -> 깊은 복사

                    let temp = [...titleArr];
                    temp.push('야식');
                    settitlearr(temp); // 재렌더링 발생 조건 충족

                    // [ '아침',   '점심',    '저녁',   '야식']
                    // ['졸리다','배부르다','피곤하다']    ?

                    // let temp2 = [...detailArr];
                    // temp2.push('야르');
                    // setDetailArr(temp2);

                    detailArr.push('야르');

                    console.log(titleArr, detailArr);

                }}>야식추가버튼</button>
                {
                    titleArr.map((value, index)=>{
                        return(
                            <Box boseok={value} detail={detailArr[index]} key={index}/>
                            //<Box boseok={value} detail={detail[index]}/>
                    )
                })}
            </div>
)}