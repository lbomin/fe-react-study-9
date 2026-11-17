import TextItem from "./TextItem";

export default function Q3A(){
    return (
        <div className="App">
            <div className='textItem'>
            <p className='title'>제목 : 하나</p>
            <p>내용 : 내용하나</p>
            </div>
            <div className='textItem'>
            <p className='title'>제목 : 둘</p>
            <p>내용 : 내용둘</p>
            </div>
            <div className='textItem'>
            <p className='title'>제목 : 셋</p>
            <p>내용 : 내용셋</p>
            </div>
            <div className='textItem'>
            <p className='title'>제목 : 넷</p>
            <p>내용 : 내용넷</p>
            </div>
            <div className='textItem'>
            <p className='title'>제목 : 다섯</p>
            <p>내용 : 내용다섯</p>
            </div>
            <p>0000000000000000000000000000000000000000000000000000000000000000000000000000000000</p>
            <TextItem title='하나' content='내용하나'/>
            <TextItem title='둘' content='내용둘'/>
            <TextItem title='셋' content='내용셋'/>
            <TextItem title='넷' content='내용넷'/>
            <TextItem title='다섯' content='내용다섯'/>
        </div>
        );
}