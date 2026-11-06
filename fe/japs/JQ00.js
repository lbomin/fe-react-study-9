//Q1.
const name = '홍길동';
let age = 25;
const cm = 175.5;
const student = true;
const contry = '서울';

console.log('이름:',name);
console.log('나이:',age);
console.log('키:',cm);
console.log('학생 여부:',student);
console.log('거주 지역:',contry);
age = 26
console.log('-----재 출 력-----')
console.log('이름:',name);
console.log('나이:',age);
console.log('키:',cm);
console.log('학생 여부:',student);
console.log('거주 지역:',contry);

//Q2.
let price = 1000;
let quantity = 5;
const productName = "사과";

console.log(price);
console.log(quantity);
console.log(productName);

price = 1500;
quantity = 10;

console.log('-----재 출 력-----')
console.log(price);
console.log(quantity);
console.log(productName);

// productName='과일'
// console.log(productName);

// const 값은 변경이 되지 않으므로, 오류 발생


console.log();

//Q3.
// 10
// 20
// undefined
// 100
// 100
let a = 10;
let b = 20;
let c;

console.log(a);
console.log(b);
console.log(c);

a = 100;
b = a;

console.log(a);
console.log(b);

// b = a 란 b를 a값으로 변경하겠다는 의미
// c가 undefined로 출력되는 이유는 값을 아예 지정하지 않았기 때문입니다.

//Q4.
// let 1name = "김철수"; >>> 변수는 숫자로 시작할 수 없음
// let name = "김철수";
// let user age = 30; >>> 변수에는 공백이 들어갈 수 없음
// let userAge = 30;
// let user-name = "이영희"; >>> 변수에는 _ $ 이외의 문자를 사용할 수 없음
// let user_name = "이영희";
// let const = 100; >>> 한 줄에 변수를 두 개 이상 선언할 수 없음
// let = 100;
// const = 100;
// let my_score = 95; >>> 정상
// let $price = 5000; >>> 정상
// let _count = 10; >>> 정상