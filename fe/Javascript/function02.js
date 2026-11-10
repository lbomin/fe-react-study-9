


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