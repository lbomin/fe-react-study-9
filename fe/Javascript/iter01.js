
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