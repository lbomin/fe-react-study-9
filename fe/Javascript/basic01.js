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

