console.log('basic01.js');
console.log('text');
console.log('김유겸')

// 변수 선언

// 변수 타입
// var let const

// 변수선언 : let
// 상수선언 : const (한 반 할당/저장 하면 값이 바뀌지 않는다)

// 숫자 문자 논리형 ...

let a = 10; // 숫자타입 정수형
let b = 20.321; // 숫자타입 실수형
let c = "안녕하세요"; // 문자타입
let d = '반갑습니다';
let e = true; // 참
let f = false; // 거짓

let v1 = 123; // 변수 선언 + 값 저장  :  변수 초기화
let v2 = 0;
let v3 = null;
let v4 = undefined;
let v5; // 변수 선언

//let v1 = 222; // v1 변수를 다시 선언하겠다 >>> 중복 불가
v1 = 124;

// 변수명은 숫자로 시작할 수 없고, $ _ 이외 특수문자 불가, 띄어쓰기 불가, 예약어(키워드) 불가

// 변수명을 짓는 관례
/*
    like food X
    like_food snake case
    likeFood  camel case
*/

const g = 30;
const h = "헬로";

a = 20;
//g = 300;    //const 변수는 상수형 변수로 값 변경이 불가

console.log(103234);
console.log("sadd");
console.log("안녕 '상당히' 반가워 닭살큼겸아");
console.log("안녕 \"상당히\" 반가워 닭살큼겸아");
console.log(`백틱문자로 하면 중간에 '작은' "큰" 상관없음`);
console.log(`"김"'유'겸은 상관 있음`);

let x = 20;
let y;

console.log(x);
console.log(y); //undefined


//--------------------------------------------------
var abc = 10;
var abc = 20;
var abc = 30;
// var 는 중복선언이 가능하다. 오류발생이 되지 않는다
// 리스크가 큼 > let 사용

z = 50;
console.log(z);
//let z = 500;
var z = 30;
console.log(z);



// 조건문 if문
// if 만약에~

// if (조건식) {실행할 코드} -> 조건식이 참(true) 면 실행하겠다 

let num = 15;

if(num>5){
    console.log('num이 5보다 크다');
    console.log('if문 {} 안에 코드 실행');
}

if(num>=10)
    console.log('num이 10보다 크거나 같다');

if(num==10) // 중괄호를 제외하면 다음 한줄만 종속된다
    console.log('num이 10보다 크거나 같다1');

console.log('num이 10보다 크거나 같다2');
console.log('num이 10보다 크거나 같다3');

console.log(num);

let x = 3;
let y;

if(num>0){
    console.log('num이 0보다 크더라');

    // {} 영역은 인식되는 지역을 구분
    console.log(x);
    x = 50;
    console.log(x);

    //let y = 33;
    y = 33;
    y = y + 7;
    console.log(y);
}
console.log(y);

//if(조건식 <- 결과가 참 거짓)

x = 3;
let b1 = (x < 10);
if( x < 10 ){
    console.log("111");
}
else{
    console.log('닭살큼겸');
}

if(b1==true){
    console.log("222");
}

if(b1){
    console.log('333');
}

let z = 10;

if (z>10){
    console.log('z가 100보다 크다');
} else{
    console.log('z가 10보다 크지 않다');
}


let money = 0;

let isHungry = true;

if(isHungry){
    console.log("햄버거 주문");
    money = money + 5000;
} else{
    console.log("맥플러리 주문");
    money += 2000;
}

let option = true

if(option){
    console.log("패티 옵션 추가");
    money = money + 2000;
} else{
    console.log("옵션 추가 없음");
}

let isDiscount = true;
let coupon = 0;
let age = 25;

//if(isDiscount==false){}
if(!isDiscount){ // 할인이 없으면
console.log('할인 없음');
} else{ // 할인을 받으면
// 추가적인 로직. 얼마 할인이냐? ~20 1000원 20~ 500원
    if(age<20){//1000원 할인
    coupon = 1000;
    } else{
        coupon = 500;
    }
console.log('할인 적용');
money = money - coupon;
}
console.log('할인 적용 금액:'+coupon);
console.log('최종금액:'+money);



/*
    if{}

    if{}

    if{}
    ...

    else 단독 사용은 불가

    if{} else{} 여기까지만 ㄴㄴ else{}

    if{aaa
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



//조건문의 중첩
/*
if(){

    if(){}
    else(){}

}else{
    if(){}
}
*/
/*
    수면시작시간

    21시 기준
        이전 -> 일찍
        이후 -> 늦게

    8시간 기준
        적게
        많이

    일찍 적게
    일찍 많이
    늦게 적게
    늦게 많이
    유겸 닭살
*/

let goBedTime = 23;
let sleepTime = 5;

if(goBedTime <= 21){ //일찍

    //일찍 자러간건 확정
    //많이 적게 판단

    if(sleepTime >= 8){ //많이
        console.log('일찍 많이');
    } else { //적게
        console.log('일찍 적게');
    }

} else { //늦게

    //늦게 자러간거 확정

    if(sleepTime >= 8){ //적게
        console.log('늦게 많이');
    } else { //적게
        console.log('늦게 적게');
    }

}

if(goBedTime <= 21 && sleepTime >= 8){
    console.log('일찍 많이')
} else if (goBedTime <= 21 && sleepTime < 8){
    console.log('일찍 적게')
} else if (goBedTime > 21 && sleepTime >= 8){
    console.log('늦게 많이')
} else {
    console.log('늦게 적게')
}

let point = 111;

//0-100

if(point >= 50)
    console.log('잘했다');
else
    console.log('아쉽다');

if(point >= 50 && point <= 100)
    console.log('잘했다');
if(point < 50 && point >= 0)
    console.log('아쉽다');

//먼저 정상범위를 필터링 하고 -> 비교 진행

if( point >= 0 && point <= 100 ){ //0-100 보장
    if(point >= 50)
        console.log('잘했다');
    else
        console.log('아쉽다');
} else {
    console.log('점수 입력이 잘못됨');
}


// function 함수

// 동작, 기능을 나타낸 코드 뭉치
// 매개변수, 리턴

/*
    function 함수명 (매개변수) {
        실행코드;
        실행코드;
        실행코드;
        실행코드;
        return 리턴값;
    }
    
    옵션
    매개변수 O X
    return  O X

*/

// 매개변수 X 리턴 X
function func01(){

    console.log('func01 함수 실행됨');
    console.log('함수 실행 코드 01');

}
// 함수를 정의한 상태(실행 X)

// 함수 호출(call)

func01();

// 매개변수 O 리턴 X
function func02(name){
    console.log('func02 함수 실행됨')
    console.log('매개변수: '+name)
}

func02(); // 함수호출 () 매개변수애 들어갈 값 전달 안됨
func02('초딩석');

function func02_2 (a, b){ // 매개변수 2개
    console.log('func02_2 함수 실행됨')
    console.log('매개변수 a: '+ a)
    console.log('매개변수 b: '+ b)
}

func02_2('앰생', '김보석');

// 매개변수 X 리턴 O
function func03(){
    console.log('func03 함수 실행됨')
    console.log('func03 리턴 500 나감')
    return 500;
}

func03();

let temp = func03();

console.log(temp);
console.log(func03());
console.log(func01());

// 매개변수 O 리턴 O
function func04(n){
    console.log('func04 함수 실행됨')
    console.log('넘겨준 값을 * 10해서 돌려줌')
    return n * 10;
}

func04(10);

let result = func04(5);
console.log(result);

console.log(func04(231));
console.log(func04(44));
console.log(func04(53));




function func01(){
    console.log('func01()');
}

func01();

const func02 = function(){
    console.log('func02()');
}

func02();

const func03 = function func0303(){
    console.log('func03()');
}

func03();
//func0303(); 함수로 인식 불가


// 화살표 함수 (Arrow Function)

const func04 = () => {
    console.log('func04()');
}

func04();

// -------------------------------------

// 함수선언 + 매개변수

function func05(a, b){
    console.log('func05() '+a+' '+b);
}

func05(10, 20);
func05('a','b');

const func06 = function(a, b){
    console.log('func06() '+a+' '+b);
}

func06(12,34);

const func07 = function func0707(a, b){
    console.log('func07() '+a+' '+b);
}

func07(56,78);

const func08 = function(kim, bosuk){
    console.log('func08() '+kim+' '+bosuk);
}

func08('김','보석')

//----------------------------------

//함수 리턴

//두개의 매개변수를 받아서 두 값의 합을 반환(return)
function sum1(a, b){
    let sum = a+b;
    return sum;
    //return a+b;

}

let r1 = sum1(10, 20);
console.log(r1);
console.log(sum1(55, 56));

const sum2 = function(a, b){
    return a-b;
}

console.log(sum2(100100,33033));

const sum3 = (a, b) => {
    return a-b;
}

console.log(sum3(10100,3333));

// 화살표 함수 => 뒤에 중괄호 없이 바로 나오는 값을 return 값으로 인식처리

const sum4 = (x, y) => x+y;
// => 바로뒤에 쓰는것이 이 뜻과 동일 {return a+b;}
console.log(sum4(10,9));

const sum5 = () => 1+2+3+4+5;
console.log(sum5());



//----------------------------

/*
function ff1(){
    let w = 33000;
}
console.log(w);

if(true){
    let q = 10;
}

console.log(q);

{
    let e = 213;
}

console.log(e);

for(let r=1; r<10; r++)
console.log(r);

다 내수용 변수라 {} 밖에선 사용 안됨
*/

// 호이스팅
// var => const let

console.log(w);
var w=30;

r = 3000;
var r;
console.log(r);

// 함수 호이스팅

check();

function check(){
    console.log('check() !!!');
}

check();


//일회용 함수

(function oneTime(){
    let x = 10;
    let y = 20;
    console.log('일회용 함수');
})(); // 일회용 함수 선언 및 바로 호출(즉시사용)

//oneTime(); 외부 호출 불가

{
    let x =10;
    let y = 20;
    console.log('일회용 함수');
}


// js 함수

// 함수는 변수에 담을 수 있다

// js 에서는 함수도 매개변수에 전달 가능

function func01(a){
    console.log(a);
}

func01(1233);

function func02(f) {    //f : 함수
    console.log('func02()');
    f(); //함수 호출   f가 함수
}

const temp1 = () => {
    console.log('temp1() 함수 실행');
}

const temp2 = () => {
    console.log('temp2() 함수 실행 temp2()');
}

//func02(temp1()); temp1()은 함수 호출 후 return 값을 넘겨주겠다는 의미

func02(temp1);
func02(temp2);


//-----------------------------------------------

// 콜백함수   callback   나중에/특정 시점에 실행할 함수

// 함수 디저트주문
// 함수 음식주문

// 디저트주문() 음식주문()
// 음식주문() 디저트주문()

// 음식주문(디저트주문)
// { 음식주문 관련코드 ........ 디저트주문() }


function orderFood( func ){
    console.log('음식주문');
    console.log('음식수령');
    console.log('음식정리');
    func(); //매개변수 함수 호출
    console.log('수다');
}

function orderDessert(){
    console.log('디저트 주문');
    console.log('디저트 먹기');
}

orderFood(orderDessert);
//orderDessert();
console.log('----------------------------------------');
//-----------------------
// 예약, 예약 완료 안내

const reserve = (name, callback) => {
    console.log('예약 종류 확인');
    console.log('예약 가능 여부 확인');
    console.log('예약 스케줄 조정');

    //...

    console.log(name+'님 예약 가능 확인 -> 예약 완료');

    console.log('예약 완료 안내');
    callback(); //전달된 콜백함수 실행
}

const sendMsg = () =>{
    console.log('sms 문자로 안내해주기. 문자전송');
}

reserve("바보석", sendMsg);

function callInfo(){
    console.log('전화로 직접 정보 안내해주기');
}

reserve("김석민", callInfo);

reserve('이현민', ()=>{
    console.log('카카오톡으로 안내해주기');
});

//const fff = ()={}

//------------------------------------------
// return 에 함수활용

function fnc1(){
    let x = 10;
    x = x + 20;
    return x;
}

let r1 = fnc1; //return 값아 있다
console.log(r1());


function fnc2(){
    let y = 30;
    console.log('fnc2 실행됨');

    return () =>{
        console.log('fnc2() 에서 return 한 함수 호출');
    }
}

const rf2 = fnc2();

rf2();

function fnc3(){

    return (x)=>{
        console.log('fnc3 내부에서 리턴한 함수');
        console.log('매개변수 x : ' + x);
    }
}

const rf3 = fnc3();
rf3(1213);

console.log('');


// Iteration 반복문
// iter

console.log('닭살큼겸');


/*
    for 문

    for(초기화식; 조건식; 증감식){
        실행문;
    }
    
*/

for(let i=1; i<=10; i++){
    console.log('반복문 재밌다');
}

console.log('반복문 for 끝남');

/*
let i=1;

if(i<=10){
console.log('반복문 재밌다');
}
i++
if(i<=10){
console.log('반복문 재밌다');
}
i++
if(i<=10){
console.log('반복문 재밌다');
}
i++
...(i<=10)가 거짓이 될때까지 반복
*/

for(let i=1; i<3; i++){
    console.log('목마르다');
}

let i;
for(let i=35; i<44; i++){
    console.log('for 실행문');
}

//if처럼 {}내부에서 변수 선언시 내수용 변수 취급

console.log(i);

for(i=10; i<50; i=i+5){
    console.log('i가 5씩 증가하네');
}


// 단순 n회 반복

// 단순 5회 반복
for(i=5; i>0; i--){
    console.log('닭살큼겸 닭살');
}

for(i=1; i<=5; i++){
    console.log('다이어트 1일차');
}

// 실제 내부 실행문에 활용할 목적으로 값을 조정하면서 사용

console.log('---------------------------');
for(i=1; i<=5; i++){
    console.log('다이어트 '+i+'일차');
}


// 숫자의 총 합
// 1 - 10 총 합
//let number = 1+2+3+4+5...+10;

// 1 - 100 총 합
//let number = 1+2+3+4+5...+99+100;

/*
i:1+
i:2+
i:3+
*/

let sum = 0; // 덧셈에 영향을 안주는 0으로 초기화

//sum = sum + 1;

for(i=1; i<=100; i++){
    sum = sum + i;
}

console.log(sum);

//반복문 다 돌고 sum 변수에는 1-10까지의 누적 합 

//1-10 곱하기 -> 초기값 1   곱셈에 영향을 안주는 1로 초기화




// 총합
// 10 20 30 ... 90 100의 총 합

sum = 0;
for(i=10; i<=100; i=i+10){
    sum = sum + i
}

console.log('sum: '+sum);



// 더하기 계산 값 : 10 20 ... 90 100
// 반복문 기준 값 : 1 2 ... 9 10
// 더할값 = 기준값 * 10

sum = 0;
for(i=1; i<=10; i++){
    sum = sum + (i*10)
}

console.log('sum: '+sum);

for(i=2; i<20; i=i*2){}
// 2 4 8 16 / 32

for(i=400; i>100; i=i-50){}
// 400 350 300 250 200 150 / 100

for(i=100; i>=90; i--){}
// 100 99 98 .. 92 91 / 90

console.log();


// Iteration 반복문
// iter

console.log('닭살큼겸');


/*
    for 문

    for(초기화식; 조건식; 증감식){
        실행문;
    }
    
*/

for(let i=1; i<=10; i++){
    console.log('반복문 재밌다');
}

console.log('반복문 for 끝남');

/*
let i=1;

if(i<=10){
console.log('반복문 재밌다');
}
i++
if(i<=10){
console.log('반복문 재밌다');
}
i++
if(i<=10){
console.log('반복문 재밌다');
}
i++
...(i<=10)가 거짓이 될때까지 반복
*/

for(let i=1; i<3; i++){
    console.log('목마르다');
}

let i;
for(let i=35; i<44; i++){
    console.log('for 실행문');
}

//if처럼 {}내부에서 변수 선언시 내수용 변수 취급

console.log(i);

for(i=10; i<50; i=i+5){
    console.log('i가 5씩 증가하네');
}


// 단순 n회 반복

// 단순 5회 반복
for(i=5; i>0; i--){
    console.log('닭살큼겸 닭살');
}

for(i=1; i<=5; i++){
    console.log('다이어트 1일차');
}

// 실제 내부 실행문에 활용할 목적으로 값을 조정하면서 사용

console.log('---------------------------');
for(i=1; i<=5; i++){
    console.log('다이어트 '+i+'일차');
}


// 숫자의 총 합
// 1 - 10 총 합
//let number = 1+2+3+4+5...+10;

// 1 - 100 총 합
//let number = 1+2+3+4+5...+99+100;

/*
i:1+
i:2+
i:3+
*/

let sum = 0; // 덧셈에 영향을 안주는 0으로 초기화

//sum = sum + 1;

for(i=1; i<=100; i++){
    sum = sum + i;
}

console.log(sum);

//반복문 다 돌고 sum 변수에는 1-10까지의 누적 합 

//1-10 곱하기 -> 초기값 1   곱셈에 영향을 안주는 1로 초기화




// 총합
// 10 20 30 ... 90 100의 총 합

sum = 0;
for(i=10; i<=100; i=i+10){
    sum = sum + i
}

console.log('sum: '+sum);



// 더하기 계산 값 : 10 20 ... 90 100
// 반복문 기준 값 : 1 2 ... 9 10
// 더할값 = 기준값 * 10

sum = 0;
for(i=1; i<=10; i++){
    sum = sum + (i*10)
}

console.log('sum: '+sum);

for(i=2; i<20; i=i*2){}
// 2 4 8 16 / 32

for(i=400; i>100; i=i-50){}
// 400 350 300 250 200 150 / 100

for(i=100; i>=90; i--){}
// 100 99 98 .. 92 91 / 90

console.log();


// Object 객체

// 자바스크립트의 자료형

let x = 10; // 단일 변수
let arr = [1,2,3,4,5]; // 배열

// 객체
// { key;value, key;value, key;value }

// 인터넷 (HTTP) 통신     데이터를 전달 (송수신/주고받기)
// JSON - Javascript Object Notation

// Java의 Map 자료형과 비슷, Python Dictionary 자료형과 비슷

/*
let 이름 =
let 주소 =
let 전화번호 =

let 이름2 =
let 주소2 =
let 전화번호2 =

{
    이름 :
    주소 :
    전화번호 :
}

*/


// key : value

let weatherInfo = {
    day  : '261111',
    weather : '맑음',
    temp : 8,
    location : '원성동',
    hasFog : false
};

console.log(weatherInfo);
console.log(weatherInfo.day);
console.log(weatherInfo.location);
console.log(weatherInfo.hasFog);

let weatherInfo2 = {
    day  : '261111',
    weather : '맑음',
    temp : 8,
    location : '원성동',
    hasFog : false
};

//-------------------------------------------
let lunchInfo = {
    menu: '짜장면',
    price: 5000,
    shop: '대천반점',
    location: '시장 내부'
};

console.log(lunchInfo);
console.log(lunchInfo.shop);

/*
    키:값

    키:문자형
    키:숫자형
    키:논리형

    {} : 객체타임
    [] : 배열타입

    키 : {}
    키 : []
*/

let shopInfo = {
    shop: '대천반점',
    location: '시장 내부',
    menu: ['짜장면', '짬뽕', '잡채밥', '우동']
};

console.log(shopInfo);
console.log(shopInfo.menu);
console.log(shopInfo.menu[2]);

let shopInfo2 = {
    shop: '대천반점',
    location: '시장 내부',
    menu: ['짜장면', '짬뽕', '잡채밥', '우동'],
    price : [5000, 7000, 8000, 6000]
};

console.log(shopInfo2.menu[0]);
console.log(shopInfo2.price[0]);


let shopInfo3 = {
    shop: '대천반점',
    location: '시장 내부',
    menu: [
        {
            name : '짜장면',
            price : 5000
        }, 
        {
            name : '짬뽕', 
            price : 7000
        }, 
        {
            name : '잡채밥', 
            price : 8000
        }, 
        {
            name : '우동', 
            price : 6000
        }
    ],
};

console.log(shopInfo3.menu[0]);
console.log(shopInfo3.menu[2].price);

console.log('---------------------------------');

let shopInfo4 = {
    name:'대천반점',
    location:'시장내부',
    address: {
        postCode: 51211,
        addr1:'천안시',
        addr2:'동남구'
    },
    menu: [
        {
            name:'짜장면',
            price:5000,
            raw:['양파', '돼지고기', '춘장']
        },
        {
            name:'잡채밥',
            price:7000,
            raw:['양파', '잡채', '밥']
        },
        {
            name:'우동',
            price:5000,
            raw:['양파', '호박', '옥수수면']
        },
        {
            name:'울면',
            price:7000,
            raw:['새우', '호박', '파', '면', '당근']
        }
    ]
};

//주소가 어느시에 있는지 출력
console.log(shopInfo4.address.addr1);
//잡채밥이 들어있는 객체 출력
console.log(shopInfo4.menu[1]);
//우동의 원재료들만 출력
console.log(shopInfo4.menu[2].raw);
//울면안에 있는 재료 중 "파"만 출력
console.log(shopInfo4.menu[3].raw[2]);

console.log('------------------------------------------');

let shopList = [
{
    name : '대천반점',
    location : '천안시장내부',
    menu : [
        { 
            name:'짜장면',
            price: 5000,
            raw: ['춘장', '양파', '돼지고기']
        },
        {
            name:'짬뽕',
            price:7000,
            raw: ['오징어', '면', '고춧가루']
        },
        {
            name:'볶음밥',
            price:7000,
            raw: ['달걀', '당근', '감자']
        }
    ]
},
{
    name : '맘스터치',
    location : '천안길가에',
    menu : [
        { 
            name:'싸이버거',
            price: 6000,
            raw: ['빵', '채소', '닭다리살']
        },
        {
            name:'휠렛',
            price:7000,
            raw: ['빵', '채소', '닭가슴살']
        }
    ]
}
];

//휠렛버거의 가격
console.log(shopList[1].menu[1].price);
//볶음밥의 재료들
console.log(shopList[0].menu[2].raw);
//싸이버거에 들어있는 닭다리살 재료
console.log(shopList[1].menu[0].raw[2]);
//대천반점의 위치
console.log(shopList[0].location);
//대천반점 짬뽕 객체
console.log(shopList[0].menu[1]);

console.log();


// js 배열

// 동적으로 처리
/*
    shift       : 앞 삭제
    unshift     : 앞 추가

    pop         : 뒤 삭제
    push        : 뒤 추가
*/

let arr = [1,2,3];

console.log(arr);
arr.unshift(55);
console.log(arr);
arr.shift();
console.log(arr);
arr.push(99);
console.log(arr);
arr.push(100);
console.log(arr);
arr.pop();
console.log(arr);

// concat  배열 연결 함수

let arr1 = [1,2,3];
let arr2 = [4,5,6];

//[1,2,3,4,5,6]
console.log(arr1.concat(arr2));
console.log(arr2.concat(arr1));

console.log(arr1);

arr1 = arr1.concat(arr2);
// 비파괴적인 함수를 사용하여 원본을 수정하고 싶으면 원본에 저장하여라

/*
    함수 수행

    파괴적 함수     : 함수 실행하면 원본에 영향을 줌
    비파괴적 함수   : 함수 실행해도 원본에 영향을 주지 않음
*/

let n = 10;
console.log(n);
console.log(n+1);
console.log(n);
console.log(n++);
console.log(n);
n = n + 1;

console.log('---------------------------------------');

// 베열 복사 (참조타입변수)

/*
    깊은 복사 (deep copy)       : 값 자체를 통으로 새롭게 새로운 곳에 복사
    앝은 복사 (shallow copy)    : 들고있는 값만 복사 (바라보는 주소만 복사)
*/

let a = 10;
let b = a;

console.log(a, b);
b = 20;
console.log(a, b);

let arr3 = [1,2,3];
let arr4= arr3;

console.log(arr3, arr4);
arr3[0] = 999;
console.log(arr3, arr4);


// ... 전개연산자

let arr5 = arr3;        //앝은 복사
let arr6 = [...arr3];   //깊은 복사         [ ...[999,2,3]]     999,2,3     [999,2,3]
// arr6 = [999,2,3]

console.log(arr3,arr6);
arr3[1] = 333;
console.log(arr3,arr6);

//-----------------------------------------------

let x = [1,2,3];
let y = x;      // 얕은
let z = [...x]; // 깊은

console.log(x,y,z);
x[2] = 888;
console.log(x,y,z);

let q = [10, 20, 30, ...x, 40, 50]
console.log(q);

//----------------------------------------

// splince 함수
// 배열의 특정 위치에 추가, 삭제

// splice(인덱스, 삭제할갯수)
// splice(인덱스, 삭제할갯수, 추가할값)

console.log('----------------------------');

let arr7 = [1,2,3,4,5];
console.log(arr7);
//let temp = arr7.splice(1, 2);
arr7.splice(1, 2);
console.log(arr7);
//console.log(temp);

arr7.push(6);
arr7.unshift(0);

console.log(arr7);
//arr[2] = 2;   // 덮어쓰기
arr7.splice(2, 0, 2);
console.log(arr7);
//arr7[2] = 20;
arr7.splice(2,1,20);
console.log(arr7);


//-----------------------------
console.log('---------------------------------');

let obj = {
    name:'김밥천국',
    menu:'참치김밥'
};

console.log(obj);
obj.menu = '치즈김밥';
console.log(obj);
obj.price = 5000;
console.log(obj);
obj.price=6500;
console.log(obj);
obj.price = 0; // 단순 값을 0으로 만듦
console.log(obj);
delete obj.price; // 특정 키 자체를 삭제
console.log(obj);

console.log('---------------------------------------');

let obj2 = obj;
console.log(obj, obj2);
obj.name='김밥나라';
console.log(obj, obj2);

let obj3 = structuredClone(obj);  // 깊은 복사
console.log(obj, obj3);
obj.menu = '돈까스 김밥'
console.log(obj, obj3);

//------------------------------------------------------
obj = { name: '김밥나라', menu: '돈까스 김밥' }; // js 객체로 인식 -> 벅사 -> 참조타입변수 -> 주소가 복사
console.log(obj.name);
obj = "{ name: '김밥나라', menu: '돈까스 김밥' }" // js 문자형(텍스트)로 인식
let obj4 = obj;
console.log(obj, obj4.name, obj4.length);

// js obj 타입 -> text -> js obj

// js pbj -> text 변환 : JSON.stringify
// text -> js obj 변환 : JSOn.parse

obj = { name: '김밥나라', menu: '돈까스 김밥' };

let jsonText = JSON.stringify(obj)
console.log(jsonText);
let newObj = JSON.parse(jsonText);
console.log(newObj);
console.log(newObj.name);

console.log(obj, newObj);
obj.menu = '새우김밥';
console.log(obj, newObj);

let newObj2 = JSON.parse(JSON.stringify(obj));  //객체 깊은복사

console.log();


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

// operator 연산자

let x = 10;
let y = 20;
let z = "30";
let a = 100;
let b = 33;

console.log(x);
console.log(x+10);
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(10%4); // 나눗셈의 나머지 구하는 연산
console.log(2**3); // 제곱

console.log(x+x+y+y);

console.log(x); // 10
x = 20
console.log(x); // 20

console.log(a-b);
console.log("SixSeven!!!!!!!!!!!!!!!!!!");

x = x-5;

//3+5*2 = 13
//3+(5*2)=13

console.log(x+y+z);
console.log(z+x+y);

//---------------------

let q = 10;

//++ -- -
console.log(-10);
console.log(-q);
// ++ -- +1 -1
// ++q q++ --q q--
// + or - 를 먼저하느냐 나중에하느냐
// 변수 원본 값이 변경됨

console.log(q+5);

// q = 10
console.log(q);
console.log(q+5);
console.log(q);

console.log(q);
q = q+5;
console.log(q+5);
console.log(q);

// q++
// q=q+1

console.log(q);
q
console.log(q);
// q = 15
console.log(q++ + 10);
// 15+10=25
// q = 16
console.log(q);
// q = 16
console.log(++q + 10);
// 17+10=27
console.log(q);
// q = 17

// o o   o o
//     o
//>>>>>Tidal>>>>>
//<<<<<Wave<<<<<<

let w = 5;
console.log(w); //5
w = ++q -w; // 18-5=13 
console.log(w); // q=18
w = q-- + w; // 18 + 13 = 31 
console.log(w); // q=17

//oper02.js

let x = 10;

x = x + 10;
x = x - 5;
x = x / 3;

//복합대입연산자

x += 10;
x -= 5;
x /= 3;
// *=
// %=

// 비교 연산자

// = : 대입 연산자
// == : 같은가?
// != : 다른가?
// > < >= <= : 수학에서 그거랑 같음 (민보석>정보석, 이보민<=김유겸)

x = 10;
let y = 10;
let z = '10';

console.log( x == y );
console.log( x != y );
console.log( x > 5 );
console.log( x <= 20);

let r1 = x <= 20;
console.log(r1);

// == 값이 같은가
/// === 값 + 타입(자료형)까지 같은가
console.log( x == z );
console.log( x === z );

console.log( x === y );

//  && ||  !    
// and or not

/* 
        조건1   조건2    결과
    &&  true    true    true
        true    false   false
        false   true    false
        false   false   false

    ||  true    true    true
        true    false   true
        false   true    true
        false   false   false

    !   true    false
        false   true
*/

x = 10;
y = 20;

console.log( x > 5 && y > 0 );
console.log( x == 1 || y === "20" );
console.log(!true);

let b = false;
console.log(b);
console.log(!b);

console.log(!(x > 5 && y > 0));
console.log(!(x > 5) && y > 0);

// 삼항연산자

// (조건식) ? 항목1 : 항목2 ;
//            true   false
console.log( x == 10 ? '10이랑 같음' : "10이랑 다름" );
console.log( y == 10 ? '10이랑 같음' : "10이랑 다름" );

let r2 = x + (x==10?10:20);
console.log(r2);



//-----------------------------------------------
// 타입변환 (형변환)
// String()
// Number()

console.log('-----------------------');
let q =10;
let w = '20';
let e =30;

console.log(q+e);
console.log(q+w+e);

console.log(q+String(e)); // 10 + String(30)   '30'
console.log(q+Number(w)+e);

console.log(Number('13543'));
console.log(Number('13543.12341'));

//----------------------------------------

// && 조건식 처럼 사용

q = 10;
if ( q == 10 ){
    console.log('q가 10이더라');
}

q == 10 && console.log('q가 10이더라');

q != 11 && console.log('q가 11이 아니더라');

q == 10 && console.log('김유겸은 닭살이더라');

console.log(10==10);
console.log(10==10.0);
console.log('10'=='10.0');
console.log(Number('10')==Number('10.0'));
console.log(Number('10')===Number('10.0'));
console.log();