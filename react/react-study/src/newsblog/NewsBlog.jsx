import './NewsBlog.css'
import { useState } from 'react';
import Modal from './Modal';

function Box({boseok, bomin}){

    let [likeCount, setLikeCount] = useState(0);

    let [modalFlag, setModalFlag] = useState(false);

    return(
        <div className='post-list'>
            <h4 onClick={()=>{
                // ModalFlag 값 변경
                // setModalFlag(true);

                // if(modalFlag)
                //     setModalFlag(false);
                // else
                //     setModalFlag(true);

                {/* {
                    modalFlag == true ? <Modal/> : null
                } */}

                setModalFlag( !modalFlag );
                // 재렌더링

            }}>{boseok}의 뉴스 <span onClick={(event)=>{
                // event.preventDefault();  발생하는 이벤트의 기본 수행을 막는다
                event.stopPropagation(); // 이벤트 발생을 추가로 전파/전달 하는것을 멈춤
                setLikeCount(likeCount+1); // 재렌더링
                }}>♥ </span>{likeCount}</h4>
            <p>{bomin}</p>
            
            {
            modalFlag && <Modal/>
            }
        </div>
    )
}

export default function NewsBlog(){
    
    // 제목  잘 바뀌지 않는 내용
    // 하드코딩(텍스트가 직접 작성되어있는) vs 일반변수 vs State변수'
    let title = 'Blog Header';

    let boseokArr = ['어제','오늘','내일'];

    let bominArr = ['내용어제','내용오늘','내용내일'];

    return(
    <div>
        <div className='black-nav'>
            <h3>{title}</h3>
            <div style={{color:'orange', fontSize:'20px'}}>React Study</div>
        </div>

        <div>
            {
            boseokArr.map((value, index)=>{
            return(
                <Box
                    key={index}
                    boseok={value}
                    bomin={bominArr[index]}
                />
            )})}
        </div>
    </div>
)}