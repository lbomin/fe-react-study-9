// JavaScript 배열 반복문 연습문제 (11~30번)

// 문제 11. [for문]
/*
let numbers = [10, 20, 30, 40, 50];
// 배열에 저장된 모든 값의 합계를 구하여 출력하세요.
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);
*/

// 문제 12. [for...of]
// let scores = [80, 70, 90, 60, 100];
// // 배열의 평균 점수를 구하여 출력하세요.
// let sum = 0;
// for (let num of scores) {
//     sum += num;
// }

// let avg = sum / scores.length;

// console.log(avg);

// 문제 13. [for문]
// let numbers = [3, 8, 12, 7, 15, 20];
// // 짝수인 값만 출력하세요.
// for (let i of numbers){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// 문제 14. [for...of]
// let scores = [45, 80, 65, 90, 30, 75];
// // 60점 이상인 점수만 출력하세요.
// for (let i of scores){
//     if(i>=60){
//         console.log(i);
//     }
// }

// 문제 15. [forEach]
// let numbers = [1, 2, 3, 4, 5, 6, 7];
// // 홀수인 값만 출력하세요.
// numbers.forEach((num) => {
//     if (num % 2 !== 0) {
//         console.log(num);
//     }
// });

// 문제 16. [for...in]
// let scores = [55, 90, 40, 85, 70];
// // 80점 이상인 요소의 인덱스와 값을 함께 출력하세요.
// scores.forEach((num, index) => {
//     if (num >= 80) {
//         console.log(index, num);
//     }
// });

// 문제 17. [for문]
let numbers = [10, 25, 30, 45, 50];
// 배열에서 30보다 큰 값의 개수를 구하여 출력하세요.
for (let i of numbers){
     if(i>30){
         console.log(i);
     }
 }

console.log('-----------');
// 문제 18. [for...of]
 let numbers1 = [5, 12, 8, 20, 3, 15];
 let max = numbers1[0];
// 배열에서 가장 큰 값을 찾아 출력하세요.
for (const num of numbers1){
     if(num>max){
         max = num;
     }
 }
console.log(max);

console.log('-----------');
// 문제 19. [forEach]
let scores = [90, 75, 60, 85, 100];
// 각 점수가 60점 이상이면 '합격', 그렇지 않으면 '불합격'을 출력하세요.
scores.forEach(i1=>{
     if(i1>=60){
        console.log('합격');
     } else {
        console.log('불합격');
     }
 });

console.log('-----------');
// 문제 20. [for문]
let numbers2 = [2, 4, 6, 8, 10];
// 각 요소의 값을 3배로 변경한 후 배열 전체를 출력하세요.
for (const i2 of numbers2){
    i3=i2*3
    console.log(i3);
 }

console.log('-----------');
// 문제 21. [for문]
let numbers3 = [10, 20, 30, 40, 50];
// 값이 30인 요소의 인덱스를 찾아 출력하세요.
for (let i4 = 0; i4 < numbers3.length; i4++) {
    if (numbers3[i4] == 30) {
        console.log(i4);
        break;
    }
}

// 문제 22. [for...in]
// let scores = [50, 80, 90, 40, 100];
// 60점 미만인 점수의 인덱스와 값을 함께 출력하세요.

// 문제 23. [for...of]
// let numbers = [10, 15, 20, 25, 30, 35];
// 5의 배수이면서 짝수인 값만 출력하세요.

// 문제 24. [forEach]
// let fruits = ['사과', '바나나', '포도', '딸기', '수박'];
// 짝수 인덱스에 있는 과일만 출력하세요.

// 문제 25. [for문]
// let numbers = [10, 20, 30, 40, 50];
// 배열의 모든 값을 역순으로 새로운 배열에 저장하고 출력하세요.

// 문제 26. [for...of]
// let scores = [40, 70, 85, 55, 95, 60];
// 60점 이상인 점수의 합계를 구하여 출력하세요.

// 문제 27. [forEach]
// let numbers = [3, 7, 2, 9, 5];
// 배열에서 가장 작은 값을 찾아 출력하세요.

// 문제 28. [for문]
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 짝수는 2배, 홀수는 3배로 변경한 후 배열 전체를 출력하세요.

// 문제 29. [for...in]
// let names = ['철수', '영희', '민수', '지연', '수진'];
// 인덱스가 1, 3인 요소만 인덱스와 이름을 함께 출력하세요.

// 문제 30. [forEach]
// let scores = [95, 70, 85, 60, 100];
// 각 학생의 번호, 점수, 합격 여부를 출력하고 마지막에 합격한 학생 수를 출력하세요.
// 합격 기준은 80점 이상입니다.