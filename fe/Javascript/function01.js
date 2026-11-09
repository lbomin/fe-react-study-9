
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