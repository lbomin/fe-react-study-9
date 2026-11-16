
//<Box text={'아침'} detail={'졸리다'}/> 
// props = { text:'아침', detail: '졸리다'}
/*
export default function Box(props){
    return(
        <div style={{backgroundColor:'lightgreen'}}>
            <h1>{props.boseok}</h1>
            <h2>{props.detail}</h2>
        </div>
    )
}

props = { text:'아침', detail: '졸리다'}
let {title, detail} = { text:'아침', detail: '졸리다'}

let [a, b, c] = [10, 20 ,30];
*/

export default function Box({boseok, detail}){
    return(
        <div style={{backgroundColor:'lightgreen'}}>
            <h1>{boseok}</h1>
            <h2>{detail}</h2>
        </div>
    )
}