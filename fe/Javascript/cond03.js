

/*
    if{}

    if{}

    if{}
    ...

    else 단독 사용은 불가

    if{} else{} 여기까지만 ㄴㄴ else{}

    if{aa
    } else{if{bb
     }else{if{
     else{dd}}}}

*/

let dice = 5; //주사위 1-6

if(dice == 1)
    console.log('1칸 전진');

if(dice == 1){
    console.log('1칸 전진')}
else{
    console.log('2칸 전진')}

//dice : 1-6 만 가능하다가 보장

if(dice == 1){

} else if(dice == 2){

} else if(dice == 3){

} else if(dice == 4){

} else if(dice == 5){

} else if(dice == 6){

}

// 마무리가 안되어 6 이상이 출력될 가능성 있음
if(dice == 1){

} else if(dice == 2){

} else if(dice == 3){

} else if(dice == 4){

} else if(dice == 5){

} else {

}


//조건만 맞으면 여러개의 결과가 출력될 가능성 있음
if(dice == 1){}
if(dice == 2){}
if(dice == 3){}
if(dice == 4){}
if(dice == 5){}
if(dice == 6){}


// 조건식 -> 최종적으로 true false 논리형 결과

if(dice > 10){}

let result = dice == 3;

if(result){}
if(result == true){}
if(result == false){}
if(!result){}

if( !(result == true)){}

if( dice > 0 && dice <= 6){} // 1-6 보장조건

if( dice < 1 || dice > 6 ){} // 1-6 범위를 벗어나면

if( !(dice < 1 || dice > 6)){}
if( (dice < 1 || dice > 6) == false){}

// --------------------------
// switch (비교하려는 대상){}

dice = 3;

switch ((dice)) {
    case 1:     // dice == 1
        console.log('case 1');
    case 2:     // dice == 2
        console.log('case 2');
    case 3:
        console.log('case 3');
        break;
    case 4:
        console.log('case 4');
        break;
    case 5:
        console.log('case 5');
        break;
    default: //else
        console.log('case 6');
        break;
}

//----------------
console.log('-----------------');

/*
    출근시간 대비 해야할 일

    8시 청소
    9시 회의
    10시 업무
    11시 외근
*/

let showTime = 8;

if(showTime == 8){
    //청소 회의 업무 외근
} else if (showTime == 9){
    //회의 업무 외근
} else if (showTime == 10){
    //업무 외근
} else {
    //외근
}

//8.5?
if( showTime <= 11){
    //외근
}
else if (showTime <= 10){}
else if (showTime <= 9){}
else if (showTime <= 8){}
else {} //결근처리

//논리적 오류 존재
if( showTime > 8){
    //외근
}
else if (showTime > 9){}
else if (showTime > 10){}
else if (showTime > 11){}
else {} //결근처리

if( showTime > 11){
    //외근
}
else if (showTime > 10){}
else if (showTime > 9){}
else if (showTime > 8){}
else {} //결근처리



if( showTime <= 8 ){
    //청소
}

if( showTime <= 9 ){
    //회의
}

if( showTime <= 10 ){
    //업무
}

if( showTime <= 11 ){
    //외근
}

switch(showTime){   
    case 8:
        //청소
        //회의
        //업무
        //외근
        break;
    case 9:
        //회의
        //업무
        //외근
        break;
    case 10:
        //업무
        //외근
        break;
    case 11:
        //외근
        //break;
}