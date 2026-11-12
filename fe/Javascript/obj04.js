
// js 배열 관련 함수

//const { useState } = require("react");

// 기본 배열
let arr = [10,20,30,40];

// 반복문 for, for in, for of, forEach

// 1) map

// 배열안의 요소들을 하나씩 접근하면서 반복실행, 수행 후 return 가능

arr.map( ()=>{  //단순 반복용.. 요소의 숫자만큼
    console.log('arr.map()');
})

// 요소로 반복 : forEach
arr.forEach( ()=>{
    console.log('arr forEach()');
})

arr.map((item)=>{   //매개변수 1개짜리 콜백함수 선언 -> item 매개변수에는 배열 요소의 값 주입
    console.log('arr.map()' + item);
})

arr.map((item, index)=>{   //매개변수 2개짜리 콜백함수 선언 -> item : 값 index : 인덱스(순번) 주입    
   console.log('arr.map()' + item + ' ' + index);
})

let bidulgi = arr.map( ()=>{
    return 99;
})
console.log(bidulgi);

let bidulgi2 = arr.map( (item)=>{
    console.log(item);
})
console.log(bidulgi2);

let bidulgi3 = arr.map( (item)=>{
    return(item+100);
})
console.log(bidulgi3);

let bidulgi4 = arr.map( (item, index)=>{
    return 'index : ' + index + ' value : ' + item;
})
console.log(bidulgi4);

let manuArr = ['라면', '우동', '김밥'];

let bidulgi5 = manuArr.map((manu, index)=>{
    return '<p>' + (index+1) + '번. ' + manu + '<p>'
})
console.log(bidulgi5);

let bidulgi6 = manuArr.map((manu, index)=>( '<p>' + (index+1) + '번. ' + manu + '<p>'))
console.log(bidulgi6);
                        //  ()=>{ return XXX; }    ()=> XXX


// 2) filter
// 실행 결과값(return)이 참인 요소만 모아서 return
arr = [10,20,30,40];

let bidulgi7 = arr.filter((value)=>{
    return true;
})
console.log(bidulgi7);

let bidulgi8 = arr.filter((value)=>{
    return (value>25);
})
console.log(bidulgi8);

arr = [1,2,3,4,3,3,2,1,2];

let bidulgi9 = arr.filter((value)=>{
    //return value !=3;
    return value == 3;
})
console.log(bidulgi9);



// 3) find
// return이 true인 요소를 찾는 기능. 못 찾으면 undefined
let bidulgi10 = arr.find((value)=>{
    return value == 3;
})
console.log(bidulgi10);



// 4) findIndex
// return이 true인 요소의 인덱스를 찾는 기능. 못 찾으면 -1
let bidulgi11 = arr.findIndex((value)=>{
    return value == 5;
})
console.log(bidulgi11);

if(bidulgi11 == -1)
    console.log('김보석같은거임 안보인다고');

//--------------------------------------------------
console.log('------------------------------------');

// 구조분해할당 (Destructuring Assignmaent)

let arr2 = [10, 20, 30];
console.log(arr2);
console.log(arr[2]);

let [n1, n2, n3] = [77, 88, 99];
console.log(n1, n2, n3);
//console.log(n1[1]);  이미 기본 숫자형 데이터인 상태 (배열이 아님)

let [nem, setNum] = [123, 456];

function fun1(){
    console.log('fun1() 함수호출');
};

fun1();

let [v, f] = [50, fun1];

console.log(v);  // 변수
f(); // 함수


let obj = {
    num1: 30,
    num2 : 50
};

console.log(obj.num1);
console.log(obj.num2);

let obj2 = obj;

console.log(obj2.num1);
console.log(obj2.num2);

let {num1, num2} = obj;

console.log(num1, num2);

//----------------------------------------
console.log('-----------------------------------');

let [count, setCount] = useState(0);

function useState(n){
    let v = n;

    function setV(input){   // set함수
        v = input;
    }

    return [v, setV];
}

console.log(count);
setCount(10);
console.log(count);


    
console.log();