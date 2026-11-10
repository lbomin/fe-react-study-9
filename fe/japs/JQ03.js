const getMealByTime=(time)=>{
    if(time>=0&&time<24){
    if (time >= 6 && time <= 10){
        return '아침';
    } else if (time >= 11 && time <= 14){
        return '점심';
    } else if (time >= 17 && time <= 20){
        return '저녁';
    } else if (time >= 21 && time <= 23){
        return '야식';
    } else {
        return '금식';
    }} else
        return '김보석같은거 쓰지말고 다시 쓰세요';
}

console.log(getMealByTime(5)); //출력값 : 금식
console.log(getMealByTime(8)); //출력값 : 아침
console.log(getMealByTime(13)); //출력값 : 점심
console.log(getMealByTime(16)); //출력값 : 금식
console.log(getMealByTime(19)); //출력값 : 저녁
console.log(getMealByTime(22)); //출력값 : 야식
console.log(getMealByTime(2)); //출력값 : 금식
console.log(getMealByTime(0)); //출력값 : 금식
console.log(getMealByTime(24)); //출력값 : 금식
console.log(getMealByTime(-1)); //출력값 : 금식