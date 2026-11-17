import { useState } from "react";
import "./Q3.css";

function Box({boseok, bomin}){
    return(
        <div>
            <p className="title">제목 : {boseok}</p>
            <p className="textItem">내용 : {bomin}</p>
        </div>
    )
}

export default function Q3(){
    let boseokArr = ['하나','둘','셋','넷','다섯'];
    let bominArr = ['내용하나','내용둘','내용셋','내용넷','내용다섯'];

    return (
        <div>
            {
            boseokArr.map((value, index)=>{
            return(
                <Box boseok={value} bomin={bominArr[index]} key={index}/>
            )})}
        </div>
)}
