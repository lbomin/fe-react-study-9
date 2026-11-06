

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