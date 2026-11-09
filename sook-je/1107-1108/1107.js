/*
//문제 1
let age = 25;
console.log(age);

//문제 2
const userName = "홍길동";
console.log(userName);

//문제 3
let price = 1000;
price = 2000;
console.log(price);

//문제 4
let data;
console.log(data);

//문제 5
let name = '김철수';
let age1 = 30;
let height = 178.5
let isStudent = false;
console.log('이름:'+name);
console.log('나이:'+age1);
console.log('키:'+height);
console.log('학생 여부:'+isStudent);

//문제 6
let a = 10;
let b = a;
a = 30;
console.log(a);
console.log(b);

//30
//10

//문제 7
//let score = 80; 
//let score = 90

// score를 선언 후, 이후 다시 선언시도를 하여 오류발생.
// 2번째 줄의 let를 지우고 실행

let score = 80; 
score = 90

//문제 8
//const maxValue = 100; 
//maxValue = 200; 

// 지정된 값이 고정되는 상수값인 const를 수정하려고 시도하였기에 오류 발생
// const가 아닌 let 사용

let maxValue = 100; 
maxValue = 200; 

//문제 9
//let 1score = 100; << 사용 불가. 사유는 변수명은 숫자로 시작할 수 없으므로
//let myName = "홍길동"; << 사용 가능
//let user age = 20; << 사용 불가. 사유는 변수명에는 공백이 들어갈 수 없으므로
//let $money = 5000; << 사용 가능
//let user-name = "김철수"; << 사용 불가. 사유는 변수명은 _ $ 이외의 특수문자를 허용하지 않으므로

//문제 10
//A: var a = 10; var a = 20;
//B: let b = 10; let b = 20;
//C: const c = 10; const c = 20;

// 정답은 C. var는 중복선언이 가능하다
*/
/*
//문제 11
a=15
b=4
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);

//문제 12
console.log(100%7);

//문제 13
console.log(2**5);

//문제 14
//3.33
//1

//문제 15
//20

//문제 16
//30

//문제 17
//18

//문제 18
//13

//문제 19
let apple = 1200;
let price = apple*5;
console.log(price);

//문제 20
//Math.floor()는 소수점 아래를 버리고 정수를 구하는 함수
let total = 125;

let hour = Math.floor(total / 60);
let minute = total % 60;

console.log(hour + "시간" + minute + "분")
*/
/*
//문제 21
//3030

//문제 22
//102030

//문제 23
//102030

//문제 24
//60 원

//문제 25
//합계: 1020

//문제 26
//합계: 30

//문제 27
//510, 50

//문제 28
//80, 200, 25

//문제 29
let name = "홍길동";
let age = "25";
console.log(name +'님의 나이는 '+ age +'세입니다.');

//문제 30
//3030, 301020, 103020, 2030
*/

//문제 31
//11

//문제 32
//8

//문제 33
//5 6

//문제 34
//6 6

//문제 35
//10 9

//문제 36
//9 9

//문제 37
//11,10

//문제 38
//11,11

//문제 39
//6,10,15

//문제 40
//6,10,16

//문제 41
//9,4,7

//문제 42
//6 11

//문제 43
//10 + 21 = a = 31,21

//문제 44
//21,13

//문제 45
//9,5,14

//문제 46
//15

//문제 47
//13

//문제 48
//20

//문제 49
//25

//문제 50
//2

//문제 51
//22

//문제 52
//4

//문제 53
//a+=20; a*=3; a-=15, a/=5;

//문제 54
//a=100000; a+=30000; a-=25000;
//console.log(a);

//문제 55
//a=100; a-=30; a+=20; a-=15;
//console.log(a);

//문제 56
//true, false

//문제 57
//true, false, true, false

//문제 58
//true, false

//문제 59
//false, true

//문제 60
//false, true, false

/*
//문제 61
let age = 20;
if(age>=20){
    console.log('20세 이상');
} else{
    console.log('20세 이하');
}

//문제 62
let score = 20;
if(score>=60){
    console.log('60점 이상');
} else{
    console.log('60점 이하');
}
*/

//문제 63
//true, false, true, true

//문제 64
//true, 6, true, 11

//문제 65
/*
let a = 100;
let b = "100";
console.log(a === b);
*/

//문제 66
//true, false, false, false

//문제 67
//true, true, true, false

//문제 68
//false, true, true

//문제 69
//true

//문제 70
//true

//문제 71
//false

//문제 72
//true, true

//문제 73
/*
let age = 25;
console.log(age >= 20 && age <= 30);
*/

//문제 74
/*
let score = 75;
let attendance = 90;
console.log(score >= 60 && attendance >= 80);
*/

//문제 75
//true, true, true, true, false

//문제 76
//성인

//문제 77
//불합격

//문제 78
//let num = 10;
//console.log(num > 0 ? "양수" : "양수가 아님");

//문제 79
//let a = 10;
//let b = 20;
//console.log(a > b ? a : b);

//문제 80
//100

//문제 81
//15

//문제 82
//let num = 17;
//console.log(num % 2 === 0 ? "짝수" : "홀수");

//문제 83
//let price = 25000;
//console.log(price >= 30000 ? "무료배송" : "배송비 발생");

//문제 84
//B

//문제 85
//25

//문제 86
//100

//문제 87
//"100"

//문제 88
//1020

//문제 89
//30

//문제 90
//1020

//문제 91
//100200, 300

//문제 92
//102030,60

//문제 93
//5.14, 100200

//문제 94
//5020, 30, 1000, 2.5

//문제 95
//102030, 60, 2010, 30

//문제 96. 쇼핑몰 결제: 상품 가격 15000원, 수량 3개, 배송비 3000원.
/*
let price = 15000; 
let Dealivery = 3000;
let Tprice = price + Dealivery;
Tprice = price * 3;
console.log(Tprice);
console.log(price>=50000 ? '고액 주문' : '일반 주문');
*/

//문제 97. 시험 점수: 국어 85, 영어 90, 수학 75.
//1) 총점 계산 2) 평균 계산 3) 평균 80 이상인지 비교
//4) 삼항연산자로 "우수"/"보통" 출력

console.log();
console.log();
console.log();
console.log();
